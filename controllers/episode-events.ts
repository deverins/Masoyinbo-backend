import { Request, Response } from 'express';
import { EpisodeModel } from "../models/episode";
import { EpisodeEventsModel } from "../models/episodeEvents";
import { Participants } from '../models/participants';
import mongoose from 'mongoose';
import { UserModel } from '../models/user';


export async function getEpisodeEventDetail(req: Request, res: Response) {
  try {

    const { id: episodeId } = req.params;
    if (!episodeId) {
      return res.status(400).json({ message: 'episodeId is required' });
    }

    const episodeObjectId = new mongoose.Types.ObjectId(episodeId);
    const episodeDetails = await EpisodeModel.findById(episodeObjectId);

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
        $lookup: {
          from: 'episodes',
          localField: 'episodeId',
          foreignField: '_id',
          as: 'episodeDetails'
        }
      },
      { $unwind: '$episodeDetails' },
      {
        $project: {
          question: 1,
          correctAnswer: 1,
          response: 1,
          isCorrect: 1,
          type: 1,
          amount: 1,
          balance: 1,
        }
      }
    ]);

    let participantFullName = 'Unknown Participant';
    if (episodeDetails.participant_id) {
      const participantDetails = await Participants.findById(episodeDetails.participant_id).select('fullName');

      if (participantDetails && participantDetails.fullName) {
        participantFullName = participantDetails.fullName;
      }
    }

    const message = `Successfully retrieved event(s) for episode ${episodeDetails.episodeNumber}.`;

    return res.status(200).json({
      message,
      events,
      participantFullName,
      episode: episodeDetails
    });

  } catch (error: any) {
    console.error('Error retrieving episode details:', error);
    return res.status(500).json({ message: 'Error retrieving episode details', error: error.message });
  }
}

export async function createEpisodeEvent(req: Request, res: Response) {
  try {
    const { episodeId, event } = req.body;

    const episode = await EpisodeModel.findById(episodeId);
    if (!episode) {
      return res.status(404).json({ message: 'Episode not found' });
    }

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

    return res.status(200).json({ message: 'Episode events create successfully', event: episodeEvent });
  } catch (error: any) {
    console.error('Error handling episode events:', error);
    return res.status(500).json({ message: 'Error handling episode events', error: error.message });
  }
}

export const editEpisodeEvent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { event } = req.body;

    if (!event) {
      return res.status(400).json({ message: 'Event details are required.' });
    }

    const { question, correctAnswer, isCorrect, response, type, amount, balance } = event;

    let updateOperation;
    if (type === 'CODE_MIX') {
      // For CODE_MIX type, remove question and correctAnswer fields
      updateOperation = {
        $set: { response, isCorrect, type, amount, balance },
        $unset: { question: "", correctAnswer: "" }
      };
    } else {
      // For other types, update all fields
      updateOperation = {
        $set: { question, correctAnswer, response, isCorrect, type, amount, balance }
      };
    }

    const updatedEvent = await EpisodeEventsModel.findByIdAndUpdate(
      id,
      updateOperation,
      { new: true, runValidators: true }
    );

    if (!updatedEvent) {
      return res.status(404).json({ message: 'Event not found.' });
    }

    return res.status(200).json({ message: 'Event updated successfully.', event: updatedEvent });
  } catch (error: any) {
    console.error('Error updating Episode Event:', error);
    return res.status(500).json({ message: 'Error updating Episode Event', error: error.message });
  }
};

export const deleteEpisodeEvent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const deletedEvent = await EpisodeEventsModel.findByIdAndDelete(id);

    if (!deletedEvent) {
      return res.status(404).json({ message: 'Event not found.' });
    }

    return res.status(200).json({ message: 'Event deleted successfully.', event: deletedEvent });
  } catch (error: any) {
    console.error('Error deleting Episode Event:', error);
    return res.status(500).json({ message: 'Error deleting Episode Event.', error: error.message });
  }
};

export async function getPerformanceStats(req: Request, res: Response) {
  try {
    // Fetch recent episodes, sorted by date
    const recentEpisodes = await EpisodeModel.find({})
      .sort({ episodeNumber: -1 })
      .limit(8)
      .select('episodeLink episodeNumber');


    // Fetch participants with 'Pending' status for the request pool
    const totalWaitingParticipants = await Participants.countDocuments({ status: 'PENDING' });
    // Fetch total participant users (you can customize this query based on your requirements)
    const totalParticipants = await Participants.countDocuments({});
    const totalUsers = await UserModel.countDocuments({});
    // Perform queries to retrieve various stats
    const [
      totalQuestions,
      totalCorrectAnswers,
      totalWrongAnswers,
      episodesData,
      totalAvailableAmount,
      lossTypeData,
      codemixData,
      totalAmountLostData,
      amountWonStats
    ] =
      await Promise.all([
        // Count total questions
        EpisodeEventsModel.countDocuments({ type: 'QUESTION' }),
        // Count total correct answers where type is QUESTION
        EpisodeEventsModel.countDocuments({ isCorrect: true, type: 'QUESTION' }),
        // Count total wrong answers where type is QUESTION
        EpisodeEventsModel.countDocuments({ isCorrect: false, type: 'QUESTION' }),
        // Aggregate total won amounts and total episodes
        EpisodeModel.aggregate([
          {
            $group: {
              _id: null,
              totalAmountWon: { $sum: "$amountWon" },
              totalEpisodes: { $sum: 1 }
            }
          }
        ]),
        // Sum the total available amount to win across all episodes
        EpisodeModel.aggregate([
          {
            $group: {
              _id: null,
              totalAvailableAmount: { $sum: "$availableAmountToWin" }
            }
          }
        ]),

        EpisodeEventsModel.aggregate([
          { $match: { isCorrect: false } },
          { $group: { _id: "$type", totalAmountLost: { $sum: "$amount" }, count: { $sum: 1 } } },
          { $project: { _id: 0, type: "$_id", totalAmountLost: 1, count: 1 } }
        ]),
        // Aggregate codemix events
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
        ]),
        EpisodeEventsModel.aggregate([
          { $match: { isCorrect: false } },
          { $group: { _id: null, totalAmountLost: { $sum: "$amount" } } }
        ]),
        // Total occurrences of each 'amountWon'
        EpisodeModel.aggregate([
          {
            $group: {
              _id: "$amountWon",
              count: { $sum: 1 }
            }
          },
          {
            $sort: { _id: 1 }
          },
          {
            $project: {
              _id: 0,
              amountWon: "$_id",
              count: 1
            }
          }
        ])
      ]);
    // Extract results from the aggregation data
    const totalAmountWon = episodesData[0]?.totalAmountWon || 0;
    const totalEpisodes = episodesData[0]?.totalEpisodes || 0;
    const totalAmountAvailable = totalAvailableAmount[0]?.totalAvailableAmount || 0;
    const totalAmountLost = totalAmountLostData[0]?.totalAmountLost || 0;

    return res.status(200).json({
      message: 'Successfully retrieved stats',
      stats: {
        totalEpisodes,
        totalQuestions,
        totalCorrectAnswers,
        totalWrongAnswers,
        totalAmountAvailable,
        totalAmountWon,
        totalAmountLost,
        totalWaitingParticipants,
        totalParticipants,
        totalUsers,
        recentEpisodes,
        lossTypeData,
        codemixData,
        amountWonStats
      },
    });
  } catch (error: any) {
    console.error('Error retrieving episode statistics:', error);
    return res.status(500).json({ message: 'Error retrieving episode statistics', error: error.message });
  }
}