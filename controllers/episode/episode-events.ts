import { Request, Response } from 'express';
import { EpisodeModel } from "../../models/episode";
import { EpisodeEventsModel } from "../../models/episodeEvents";
import { Participants } from '../../models/participants';
import mongoose from 'mongoose';

export async function getEpisodeEventDetail(req: Request, res: Response) {
  try {
    const { id: episodeId } = req.query as { id?: string };

    if (!episodeId) {
      return res.status(400).json({ message: 'episodeId is required' });
    }

    const episodeObjectId = new mongoose.Types.ObjectId(episodeId);
    const episodeDetails = await EpisodeModel.findById(episodeObjectId).exec();

    if (!episodeDetails) {
      return res.status(404).json({ message: 'Episode not found' });
    }

    const events = await EpisodeEventsModel.aggregate([
      {
        $match: {
          episodeId: episodeObjectId
        }
      },
      {
        $lookup: { from: 'episodes', localField: 'episodeId', foreignField: '_id', as: 'episodeDetails' }
      },
      { $unwind: '$episodeDetails' },
      {
        $lookup: { from: 'participants', localField: 'episodeDetails.participant_id', foreignField: '_id', as: 'participantDetails' }
      },
      {
        $unwind: { path: '$participantDetails', preserveNullAndEmptyArrays: true }
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
          participantFullName: '$participantDetails.fullName'

        }
      }
    ]);

    if (events.length === 0) {
      return res.status(404).json({ message: 'No events found with participants' });
    }

    const message = `Successfully retrieved event(s) for episode ${episodeDetails.episodeNumber}.`;

    return res.status(200).json({
      message,
      events,
      episode: episodeDetails
    });

  } catch (error: any) {
    console.error('Error retrieving episode details:', error);
    return res.status(500).json({ message: 'Error retrieving episode details', error: error.message });
  }
}



export async function createEpisodeEvents(req: Request, res: Response) {
  try {
    const { episodeId, events } = req.body;

    const episode = await EpisodeModel.findById(episodeId).exec();
    if (!episode) {
      return res.status(404).json({ message: 'Episode not found' });
    }

    const savedEvents = [];
    for (const event of events) {
      const { question, correctAnswer, isCorrect, response, type, amount, balance } = event;


      const episodeEvent = new EpisodeEventsModel({
        question,
        correctAnswer,
        response,
        isCorrect,
        type,
        amount,
        balance,
        episodeId,
      });

      await episodeEvent.save();
      savedEvents.push(episodeEvent);
    }

    return res.status(200).json({ message: 'Episode events handled successfully', events: savedEvents });
  } catch (error: any) {
    console.error('Error handling episode events:', error);
    return res.status(500).json({ message: 'Error handling episode events', error: error.message });
  }
}


export async function getPerformanceStats(req: Request, res: Response) {
  try {
    const recentEpisodes = await EpisodeModel.find({})
      .sort({ episodeDate: -1 })
      .limit(10)
      .select('episodeLink');

    // Fetch participants with 'Pending' status for the request pool
    const totalWaitingPaticipants = await Participants.countDocuments({ status: 'Pending' })
    const [totalQuestions, totalCorrectAnwers, episodesData, lossTypeData, codemixData] =
      await Promise.all([
        EpisodeEventsModel.countDocuments({ type: 'QUESTION' }),
        EpisodeEventsModel.countDocuments({ isCorrect: true, type: 'QUESTION' }),
        EpisodeModel.aggregate([
          {
            $group: {
              _id: null,
              totalAmountWon: { $sum: "$amountWon" },
              totalAmountAvailable: { $sum: "$availableAmountToWin" },
              totalEpisodes: { $sum: 1 }
            }
          }
        ]),
        EpisodeEventsModel.aggregate([
          { $match: { isCorrect: false } },
          { $group: { _id: "$type", totalAmountLost: { $sum: "$amount" }, count: { $sum: 1 } } },
          { $project: { _id: 0, type: "$_id", totalAmountLost: 1, count: 1 } }
        ]),
        EpisodeEventsModel.aggregate([
          { $match: { type: "CODE_MIX" } },
          {
            $group: {
              _id: "$response",
              totalAmountLost: { $sum: "$amount" },
              count: { $sum: 1 }
            }
          },
          { $sort: { totalAmountLost: -1 } },
          {
            $project: {
              _id: 0,
              words: "$_id",
              totalAmountLost: 1,
              count: 1
            }
          }
        ])
      ]);

    const totalAmountWon = episodesData[0]?.totalAmountWon || 0;
    const totalAmountAvailable = episodesData[0]?.totalAmountAvailable || 0;
    const totalEpisodes = episodesData[0]?.totalEpisodes || 0;

    return res.status(200).json({
      stats: {
        message: 'Successfully retrieved stats',
        totalEpisodes,
        totalQuestions,
        totalCorrectAnwers,
        totalAmountAvailable,
        totalAmountWon,
        totalWaitingPaticipants,
        recentEpisodes,
        lossTypeData,
        codemixData
      },
    });
  } catch (error: any) {
    console.error('Error retrieving episode statistics:', error);
    return res.status(500).json({ message: 'Error retrieving episode statistics', error: error.message });
  }
}
