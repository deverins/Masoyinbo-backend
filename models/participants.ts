import mongoose, { Schema } from 'mongoose';

type participants = Document & {
  fullName?: string;
  email?: string;
  mobileNumber: string;
  gender: string;
  state: string;
  placeOfResidence: string;
  platformLink: string;
  socialMediaHandle: string;
  source: string;
  comment: string;
  status: string;
}

const ParticipantsSchema: Schema = new Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  mobileNumber: { type: String, required: true },
  gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
  state: { type: String, required: true },
  placeOfResidence: { type: String, required: true },
  platformLink: { type: String, required: true },
  socialMediaHandle: { type: String, required: true },
  source: [{ type: String, required: true }],
  comment: { type: String },
  status: { type: String, default: 'PENDING', enum: ['PENDING', 'SCHEDULED', 'COMPLETED'] },
});

export const Participants = mongoose.model<participants>('Participants', ParticipantsSchema);
