import mongoose, { Schema } from "mongoose";
import {
  amountValidator,
  answerValidator,
  balanceValidator,
  codeMixValidator,
  passValidator,
  questionValidator,
  responseValidator,
} from "../validators/episodeEventsValidators";


type episodeEvents = Document & {
  question: Schema.Types.Mixed;
  answer: Schema.Types.Mixed;
  response: Schema.Types.Mixed;
  pass: boolean;
  codeMix: boolean;
  amount: number;
  balance: number;
  eventTime: Date;
  episodeId: mongoose.Schema.Types.ObjectId;
}

const EpisodeEventsSchema: Schema = new Schema({
  question: [{ type: Schema.Types.Mixed, required: true, validate: questionValidator }],
  answer: { type: Schema.Types.Mixed, required: true, validate: answerValidator, },
  response: { type: Schema.Types.Mixed, required: true, validate: responseValidator, },
  pass: { type: Boolean, required: true, validate: passValidator, },
  codeMix: { type: Boolean, required: true, validate: codeMixValidator, },
  amount: { type: Number, required: true, validate: amountValidator, },
  balance: { type: Number, required: true, validate: balanceValidator, },
  eventTime: { type: Date, default: Date.now },
  episodeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Episode', required: true },
});

export const EpisodeEventsModel = mongoose.model<episodeEvents>("EpisodeEvents", EpisodeEventsSchema);
