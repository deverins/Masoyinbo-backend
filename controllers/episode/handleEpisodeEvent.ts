// controllers/episode/handleEpisodeEvent.ts
import { Request, Response, NextFunction } from 'express';
import { EpisodeModel } from "../../models/episode";
import { EpisodeEventsModel } from "../../models/episodeEvents";

export async function handleEpisodeEvent(req: Request, res: Response, next: NextFunction) {
  try {
    const { episodeId, questions } = req.body;

    const episode = await EpisodeModel.findById(episodeId).populate('participant_id').exec();

    if (!episode || !episode.participant_id) {
      return res.status(404).json({ message: 'Episode or Participant not found' });
    }

    /** Process each question */
    for (const questionData of questions) {
      const { question, response, correctAnswer } = questionData;

      let isCorrect = response.toLowerCase() === correctAnswer.toLowerCase();
      let isCodeMix = /[a-zA-Z]/.test(response) && !isCorrect;
      let deduction = isCorrect ? 0 : 100000;

      /** Additional deduction for code mix */
      if (isCodeMix) {
        deduction += 50000;
      }

      const newBalance = episode.initialBalance - deduction;

      /** Create episode event */
      const episodeEvent = new EpisodeEventsModel({
        question,
        answer: correctAnswer,
        response,
        pass: isCorrect,
        codeMix: isCodeMix,
        amount: deduction,
        balance: newBalance,
        episodeId,
      });

      await episodeEvent.save();

      /** Update episode balance and deduction amount */
      episode.initialBalance = newBalance;
      episode.totalMoneyDeducted += deduction;

      if (isCorrect) {
        episode.noQuestionsGotten += 1;
        episode.totalCorrectAnswers += 1;
      } else {
        episode.noQuestionsMissed += 1;
      }
    }

    await episode.save();

    return res.status(200).json({ message: 'Episode event handled successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Error handling episode event', error });
  }
}

export async function getEpisodeStats(req: Request, res: Response, next: NextFunction) {
  try {
    // Fetch all episodes
    const episodes = await EpisodeModel.find({}).select('episodeLink');

    // Calculate total episodes
    const totalEpisodes = episodes.length;

    // Aggregate other statistics
    const [totalAmountWonData, totalAskedQuestionsData, totalRightQuestionsData, requestPoolData] = await Promise.all([
      EpisodeModel.aggregate([
        { $group: { _id: null, totalAmountWon: { $sum: "$amountWon" } } }
      ]),
      EpisodeModel.aggregate([
        { $group: { _id: null, totalQuestions: { $sum: "$totalQuestionAttempted" } } }
      ]),
      EpisodeModel.aggregate([
        { $group: { _id: null, totalCorrectAnswers: { $sum: "$totalCorrectAnswers" } } }
      ]),
      EpisodeModel.aggregate([
        { $group: { _id: null, totalPool: { $sum: "$initialBalance" } } }
      ])
    ]);

    const totalAmountWon = totalAmountWonData[0]?.totalAmountWon || 0;
    const totalAskedQuestions = totalAskedQuestionsData[0]?.totalQuestions || 0;
    const totalRightQuestions = totalRightQuestionsData[0]?.totalCorrectAnswers || 0;
    const requestPool = requestPoolData[0]?.totalPool || 0;

    return res.status(200).json({
      stats: {
        totalEpisodes,
        totalAmountWon,
        totalAskedQuestions,
        totalRightQuestions,
        requestPool,
        episodeLinks: episodes.map(episode => episode.episodeLink),
      },
    });
  } catch (error) {
    return res.status(500).json({ message: 'Error retrieving episode statistics', error });
  }
}
