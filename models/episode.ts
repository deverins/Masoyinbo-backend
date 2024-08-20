// models/episode.ts
import mongoose, { Schema } from 'mongoose';

const EpisodeSchema: Schema = new Schema({
  episodeLink: { type: String, required: true },
  date: { type: Date, default: Date.now },
  noQuestionsGotten: { type: Number, required: true },
  noQuestionsMissed: { type: Number, required: true },
  totalCorrectAnswers: { type: Number, required: true },
  amountWon: { type: Number, required: true },
  participant_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Participants', required: true }, 
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, 
});

export const EpisodeModel = mongoose.model('Episode', EpisodeSchema);
