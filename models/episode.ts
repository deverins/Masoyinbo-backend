import mongoose, { Schema } from 'mongoose';
import { amountWonValidator, availableAmountToWinValidator, createdByValidator, episodeDateValidator, episodeLinkValidator, episodeNumberValidator, participantIDValidator } from '../validators/episode';
type episode = Document & {
  episodeLink: string;
  episodeDate: string;
  episodeNumber: number;
  amountWon: number;
  availableAmountToWin: number;
  participant_id: mongoose.Schema.Types.ObjectId;
  createdBy: mongoose.Schema.Types.ObjectId;
  createdAt: Date
};
const EpisodeSchema: Schema = new Schema({
  episodeLink: { type: String, required: true, validate: episodeLinkValidator},
  episodeDate: { type: String, required:true, validate: episodeDateValidator},
  createdAt: { type: Date, default: Date.now },
  amountWon: { type: Number, default:0, validate: amountWonValidator},
  episodeNumber: { type: Number, required:true, unique:true, validate: episodeNumberValidator },
  availableAmountToWin: { type: Number, required: true, validate: availableAmountToWinValidator},
  participant_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Participants', required: true, validate: participantIDValidator},
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, validate: createdByValidator}
});

export const EpisodeModel = mongoose.model<episode>('Episode', EpisodeSchema);