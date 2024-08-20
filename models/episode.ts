import mongoose, { Schema } from 'mongoose';

const EpisodeSchema: Schema = new Schema({
  episodeNumber: { type: Number, required: true, unique: true },
  youtubeLink: { type: String, required: true },
  date: { type: Date, default: Date.now },
  totalQuestions: { type: Number, required: true },
  totalCorrectAnswers: { type: Number, required: true },
  totalAmountWon: { type: Number, required: true },
});

export const EpisodeModel = mongoose.model('Episode', EpisodeSchema);
