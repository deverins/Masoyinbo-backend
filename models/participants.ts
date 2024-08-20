// models/participants.ts
import mongoose, { Schema } from 'mongoose';

const ParticipantsSchema: Schema = new Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  mobileNumber: { type: String, required: true },
  gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
  state: { type: String, required: true },
  placeOfResidence: { type: String, required: true },
  platformLink: { type: String, required: true },
  socialMediaHandle: { type: String, required: true },
  source: { type: [String], required: true },
  comment: { type: [String], required: true },
  status: { type: String, default: 'Pending', enum: ['Pending', 'Scheduled', 'Completed'] },
});

export const ParticipantsModel = mongoose.model('Participants', ParticipantsSchema);
