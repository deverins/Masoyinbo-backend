import { Request, Response, NextFunction } from 'express';
import { EpisodeModel } from "../../models/episode";
import { EpisodeEventsModel } from "../../models/episodeEvents";
import { Participants } from '../../models/participants';

export async function handleEpisodeEvent(req: Request, res: Response, next: NextFunction) {
  try {
    const {
      question,
      correctAnswer,
      response = "No response?",
      type,
      amount,
      balance,
      episodeId,
      eventTime,
    } = req.body;

    const normalizedResponse = response.trim() === "" ? "No response?" : response;

    const episode = await EpisodeModel.findById(episodeId).exec();
    if (!episode) {
      return res.status(404).json({ message: 'Episode not found' });
    }

    const isCorrect = (type === 'QUESTION_NUMBER' || type === 'QUESTION') &&
      normalizedResponse !== "No response?" &&
      correctAnswer &&
      normalizedResponse.trim().toLowerCase() === correctAnswer.trim().toLowerCase();

    const episodeEvent = new EpisodeEventsModel({
      question,
      correctAnswer,
      response: normalizedResponse,
      ...(type === 'QUESTION_NUMBER' || type === 'QUESTION' ? { isCorrect } : {}),
      type,
      amount,
      balance,
      eventTime: eventTime ? new Date(eventTime) : new Date(),
      episodeId,
    });

    await episodeEvent.save();

    return res.status(200).json({ message: 'Episode event handled successfully', episodeEvent });
  } catch (error: any) {
    console.error('Error handling episode event:', error);
    return res.status(500).json({ message: 'Error handling episode event', error: error.message });
  }
}

export async function getEpisodeStats(req: Request, res: Response, next: NextFunction) {
  try {
    const episodes = await EpisodeModel.find({})
      .sort({ date: -1 })
      .select('episodeLink');

    const totalEpisodes = episodes.length;

    // Aggregate total questions asked, correct answers, and total amount won
    const [totalAskedQuestionsData, totalRightQuestionsData, totalAmountWonData] = await Promise.all([
      EpisodeEventsModel.aggregate([
        { $group: { _id: null, totalQuestions: { $sum: 1 }, questions: { $push: "$question" } } }
      ]),
      EpisodeEventsModel.aggregate([
        { $match: { isCorrect: true } },
        { $group: { _id: null, totalCorrectAnswers: { $sum: 1 }, correctAnswers: { $push: "$correctAnswer" } } }
      ]),
      EpisodeModel.aggregate([
        { $group: { _id: null, totalAmountWon: { $sum: "$amountWon" } } }
      ])
    ]);

    const totalAskedQuestions = totalAskedQuestionsData[0]?.totalQuestions || 0;
    const totalRightQuestions = totalRightQuestionsData[0]?.totalCorrectAnswers || 0;
    const totalAmountWon = totalAmountWonData[0]?.totalAmountWon || 0;

    // Fetch participants with 'Pending' status for the request pool
    const pendingParticipants = await Participants.find({ status: 'Pending' }).select('fullName email state gender status socialMediaHandle');

    return res.status(200).json({
      stats: {
        message: 'Successfully retrieved stats',
        totalEpisodes,
        totalAskedQuestions: {
          count: totalAskedQuestions,
          questions: totalAskedQuestionsData[0]?.questions || []
        },
        totalRightQuestions: {
          count: totalRightQuestions,
          correctAnswers: totalRightQuestionsData[0]?.correctAnswers || []
        },
        totalAmountWon,
        requestPool: {
          total: pendingParticipants.length,
          participants: pendingParticipants
        },
        episodeLinks: episodes.map(episode => episode.episodeLink),
      },
    });
  } catch (error: any) {
    console.error('Error retrieving episode statistics:', error);
    return res.status(500).json({ message: 'Error retrieving episode statistics', error: error.message });
  }
}

export async function getEpisodeEventDetail(req: Request, res: Response, next: NextFunction) {
  try {
    const events = await EpisodeEventsModel.aggregate([
      {
        $lookup: {
          from: 'episodes',
          localField: 'episodeId',
          foreignField: '_id',
          as: 'episode'
        }
      },
      {
        $unwind: '$episode'
      },
      {
        $lookup: {
          from: 'participants',
          localField: 'episode.participant_id',
          foreignField: '_id',
          as: 'participant'
        }
      },
      {
        $unwind: '$participant'
      },
      {
        $match: {
          'participant.status': 'Completed'
        }
      },
      {
        $project: {
          question: 1,
          correctAnswer: 1,
          response: 1,
          isCorrect: 1,
          type: 1,
          amount: 1,
          balance: 1,
          eventTime: 1,
          participantFullName: '$participant.fullName'
        }
      }
    ]);

    if (events.length === 0) {
      return res.status(404).json({ message: 'No events found with participants' });
    }
    const participantName = events[0]?.participantFullName;
    const totalEvents = events.length;

    const message = `Successfully retrieved ${totalEvents} event(s) for participant ${participantName}.`;

    return res.status(200).json({ message, events });

  } catch (error: any) {
    console.error('Error retrieving episode details:', error);
    return res.status(500).json({ message: 'Error retrieving episode details', error: error.message });
  }
}
