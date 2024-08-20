import mongoose, { Document } from 'mongoose';
import { EpisodeEventsModel } from '../models/episodeEvents';

interface EpisodeEventsDoc extends Document {
  response: string | number | 'codemix';
  amount: number;
  balance: number;
  episode_id: mongoose.Types.ObjectId;
}

EpisodeEventsModel.schema.pre<EpisodeEventsDoc>('save', function (next) {
  if (this.response === 'codemix') {
    this.amount -= 10000;
    this.balance -= 10000;
  }
  next();
});

EpisodeEventsModel.schema.post<EpisodeEventsDoc>('save', async function () {
  const episode = await mongoose.model('Episode').findById(this.episode_id);
  if (episode) {
    await episode.updateStats(this);
  }
});
