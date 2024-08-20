import mongoose, { Schema } from 'mongoose';

const RequestSchema: Schema = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  requestDate: { type: Date, default: Date.now },
  status: { type: String, default: 'Pending', enum: ['Pending', 'Scheduled', 'Completed'] },
  scheduledDate: { type: Date },
  episodeNumber: { type: mongoose.Schema.Types.ObjectId, ref: 'Episode' },
});

export const RequestModel = mongoose.model('Request', RequestSchema);

