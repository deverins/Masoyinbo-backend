import { Request, Response, NextFunction } from 'express';
import { EpisodeModel } from '../../models/episode';
import { Participants } from '../../models/participants';

/** Create a new episode */
export async function createEpisode(req: Request, res: Response, next: NextFunction) {
  try {
    const { episodeLink, participant_id, createdBy, amountWon } = req.body;

    const participant = await Participants.findById(participant_id).exec();

    if (!participant) {
      return res.status(404).json({ message: 'Participant not found' });
    }

    if (participant.status !== 'Completed') {
      return res.status(400).json({ message: 'Participant must have a status of Completed to be assigned an episode' });
    }

    /** Create a new episode instance and save to database */
    const newEpisode = new EpisodeModel({
      episodeLink,
      participant_id,
      createdBy,
      noQuestionsGotten: 0,
      noQuestionsMissed: 0,
      totalQuestionAttempted: 0,
      amountWon,
      initialBalance: 1000000,
      totalMoneyDeducted: 0,
      totalCorrectAnswers: 0,
    });

    await newEpisode.save();

    return res.status(201).json({ message: 'Episode created successfully', episode: newEpisode });
  } catch (error) {
    return res.status(500).json({ message: 'Error creating episode', error });
  }
}
