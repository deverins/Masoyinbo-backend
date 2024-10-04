import { Request, Response } from 'express';
import { Participants } from '../../models/participants';

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

/** Get participants */
export const getParticipants = async (req: Request, res: Response) => {
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
