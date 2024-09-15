// models/episodeEvents
import mongoose, { Schema } from "mongoose";
import {
  amountValidator,
  correctAnswerValidator,
  balanceValidator,
  typeValidator,
  isCorrectValidator,
  questionValidator,
  responseValidator
} from "../validators/episodeEventsValidators";


export type episodeEvents = Document & {
  question?: string;
  correctAnswer?: string;
  response?: string;
  isCorrect: boolean;
  type: "QUESTION_NUMBER" | "QUESTION" | "CODE_MIX";
  amount: number;
  balance: number;
  createdAt:  Date;
  episodeId: mongoose.Schema.Types.ObjectId;
}

const EpisodeEventsSchema: Schema = new Schema({
  question: [{ type: String, required: true, validate: questionValidator }],
  correctAnswer: { type: String, validate: correctAnswerValidator, },
  response: { type: String, default: "No response?", required: true, validate: responseValidator, },
  isCorrect: { type: Boolean, validate: isCorrectValidator, },
  type: { type: String, required: true, validate: typeValidator, },
  amount: { type: Number, required: true, validate: amountValidator, },
  balance: { type: Number, required: true, validate: balanceValidator, },
  createdAt: { type: Date, default: Date.now },
  episodeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Episode', required: true },
});

export const EpisodeEventsModel = mongoose.model<episodeEvents>("EpisodeEvents", EpisodeEventsSchema);