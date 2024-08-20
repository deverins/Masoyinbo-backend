import mongoose, { Schema } from "mongoose";
import {
  amountValidator,
  answerValidator,
  balanceValidator,
  passValidator,
  questionValidator,
  responseValidator,
} from "../validators/episodeEventsValidators";

const INITIAL_BALANCE = 1000000;

const EpisodeEventsSchema: Schema = new Schema({
  question: {
    type: Schema.Types.Mixed,
    required: true,
    validate: questionValidator,
  },
  answer: {
    type: Schema.Types.Mixed,
    required: true,
    validate: answerValidator,
  },
  response: {
    type: Schema.Types.Mixed,
    required: true,
    validate: responseValidator,
  },
  pass: {
    type: Schema.Types.Mixed,
    required: true,
    validate: passValidator,
  },
  amount: {
    type: Number,
    required: true,
    default: INITIAL_BALANCE,
    validate: amountValidator,
  },
  balance: {
    type: Number,
    required: true,
    default: INITIAL_BALANCE,
    validate: balanceValidator,
  },
  requestDate: { type: Date, default: Date.now },
  scheduledDate: { type: Date },
  episode_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Episode",
    required: true,
  },
});

export const EpisodeEventsModel = mongoose.model("EpisodeEvents", EpisodeEventsSchema);
