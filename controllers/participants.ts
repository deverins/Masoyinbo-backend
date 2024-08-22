import { Request, Response } from 'express';
import { Participants } from '../models/participants';

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
    res.status(201).json(savedParticipant);
  } catch (error) {
    res.status(500).json({ message: 'Error creating participant', error });
  }
};

/** Get all participants */
export const getParticipants = async (req: Request, res: Response) => {
  try {
       await Participants.find();
      res.status(200).json(Participants);
  } catch (error) {
      res.status(500).json({ message: 'Error fetching participants', error });
  }
};