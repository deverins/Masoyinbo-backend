import mongoose, { Schema } from 'mongoose';
type Episode = Document & {
  episodeLink: string;
  date: Date;
  noQuestionsGotten: number;
  noQuestionsMissed: number;
  totalQuestionAttempted: number;
  amountWon: number;
  participant_id: mongoose.Schema.Types.ObjectId;
  createdBy: mongoose.Schema.Types.ObjectId;
  initialBalance: number;
  totalMoneyDeducted: number;
  totalCorrectAnswers: number;
};
const EpisodeSchema: Schema = new Schema({
  episodeLink: { type: String, required: true },
  date: { type: Date, default: Date.now },
  noQuestionsGotten: { type: Number, required: true },
  noQuestionsMissed: { type: Number, required: true },
  totalQuestionAttempted: { type: Number, required: true },
  amountWon: { type: Number, required: true },
  participant_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Participants', required: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  initialBalance: { type: Number, default: 1000000 },
  totalMoneyDeducted: { type: Number, default: 0 },
  totalCorrectAnswers: { type: Number, default: 0 },
});

export const EpisodeModel = mongoose.model<Episode>('Episode', EpisodeSchema);