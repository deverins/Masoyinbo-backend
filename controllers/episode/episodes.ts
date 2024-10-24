import { Request, Response } from "express";
import { EpisodeModel } from "../../models/episode";
import { Participants } from "../../models/participants";

/** Create a new episode */
export async function createEpisode(
  req: Request,
  res: Response
) {
  try {
    const { episodeLink, participant_id, episodeNumber, createdBy, episodeDate, amountWon, availableAmountToWin } = req.body;

    const participant = await Participants.findById(participant_id).exec();

    if (!participant) {
      return res.status(404).json({ message: "Participant not found" });
    }

    /** Check if an episode already exists for the given participant ID */
    const existingEpisode = await EpisodeModel.findOne({ participant_id });
    if (existingEpisode) {
      return res
        .status(400)
        .json({ message: "Episode already exists for this participant" });
    }

    if (participant.status !== "Pending") {
      return res
        .status(400)
        .json({
          message:
            "Participant must have a status of Pending to be assigned an episode",
        });
    }

    /** Create a new episode instance and save to database */
    const newEpisode = new EpisodeModel({
      episodeLink,
      participant_id,
      createdBy,
      availableAmountToWin,
      episodeDate,
      amountWon,
      episodeNumber,
    });

    await newEpisode.save();

    /** Update participant's status to 'Completed' */
    participant.status = "Completed";
    await participant.save();

    return res
      .status(201)
      .json({
        message:
          "Episode created successfully and participant status updated to Completed",
        episode: newEpisode,
      });
  } catch (error) {
    return res.status(500).json({ message: "Error creating episode", error });
  }
}

/** 
 * Edit episode
 *  */
export async function editEpisode(req: Request, res: Response) {
  try {
    const { id } = req.params;
    console.log("Id", id)
    const updatedData = req.body;

    if (!updatedData) {
      return res.status(404).json({ message: "episode details are required." });
    }
    const { episodeLink, episodeDate, episodeNumber, amountWon, availableAmountToWin, participant_id, createdBy } = updatedData;

    const episode = await EpisodeModel.findByIdAndUpdate(
      id,
      { episodeLink, episodeDate, episodeNumber, amountWon, availableAmountToWin, participant_id, createdBy }, { new: true, runValidators: true }
    );

    if (!episode) {
      return res.status(404).json({ message: "Episode not found" });
    }

    return res.status(200).json({
      message: "Episode updated successfully",
      episode,
    });
  } catch (error) {
    return res.status(500).json({ message: "Error updating episode", error });
  }
}

/** Delete episode */
export async function deleteEpisode(req: Request, res: Response) {
  try {
    const { id } = req.params;

    const episode = await EpisodeModel.findByIdAndDelete(id);

    if (!episode) {
      return res.status(404).json({ message: "Episode not found" });
    }

    return res.status(200).json({
      message: "Episode deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({ message: "Error deleting episode", error });
  }
}

/** Get all episodes */
export async function getAllEpisodes(req: Request, res: Response) {
  try {
    const episodes = await EpisodeModel.find()
      .sort({ episodeDate: -1 });
    return res.status(200).json(episodes);
  } catch (error: any) {
    return res.status(500).json({ message: "Error fetching episodes", error: error.message });
  }
}