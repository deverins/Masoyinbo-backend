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
    next(error);
  }
}
