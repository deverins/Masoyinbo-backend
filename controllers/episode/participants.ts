import { Request, Response } from 'express';
import { Participants } from '../../models/participants';
import { EpisodeModel } from '../../models/episode';

/** Create a new participant */
export const createParticipant = async (req: Request, res: Response) => {
  try {
    const {
      fullName, email, mobileNumber, gender, state, placeOfResidence, platformLink, socialMediaHandle, source, comment
    } = req.body;

    /** Check if the email already exists */
    const emailExists = await Participants.findOne({ email });
    if (emailExists) {
      return res.status(409).json({ error: "Email address has already been registered" });
    }
    const newParticipant = new Participants({
      fullName, email, mobileNumber, gender, state, placeOfResidence, platformLink, socialMediaHandle, source, comment
    });

    const savedParticipant = await newParticipant.save();
    return res.status(201).json({ message: "Participant created successfully", data: savedParticipant });
  } catch (error) {
    res.status(500).json({ message: 'Error creating participant', error });
  }
};

/** Get All participants */
export const getAllParticipants = async (req: Request, res: Response) => {
  try {
    let status = req.query.status as string
    status = status.toUpperCase()

    let query = {} as Record<string, string>; // Initialize an empty query object

    if (status === 'PENDING' || status === 'COMPLETED') {
      query.status = status; // Find documents where status is 'pending'
    }

    const participants = await Participants.find(query);

    return res.status(200).json({ message: "Participants retrieved successfully", data: participants });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching participants', error });
  }
};

/** Get Participant by ID */
export const getParticipantById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    // Find the participant by ID
    const participant = await Participants.findById(id);

    if (!participant) {
      return res.status(404).json({ message: "Participant not found" });
    }

    return res.status(200).json({ message: "Participant retrieved successfully", data: participant });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching participant', error });
  }
};

/** Get participants Results */
export const getParticipantResults = async (req: Request, res: Response) => {
  try {
    // Aggregation pipeline
    const results = await EpisodeModel.aggregate([
      {
        $lookup: {
          from: 'participants',
          localField: 'participant_id', 
          foreignField: '_id', 
          as: 'participantDetails',
        },
      },
      {
        $unwind: {
          path: '$participantDetails',
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $project: {
          amountWon: 1,
          episodeNumber: 1,
          episodeLink: 1,
          participantFullName: { $ifNull: ['$participantDetails.fullName', 'Unknown'] },
          participantId: '$participantDetails._id', 
        },
      },
    ]);

    // Send the results back to the client
    res.status(200).json({ participantResultData: results });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while fetching participant results' });
  }
};
