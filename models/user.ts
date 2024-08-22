import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';

type userDetails = Document & {
  fullName?: string;
  username?: string;
  email?: string;
  password?: string;
}

const UserSchema: Schema = new Schema({
  fullName: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

UserSchema.pre("save", function (next) {
  const user = this;

  bcrypt.hash(user.password as string, 10, (err, hash) => {
    if (err) return next(err);
    user.password = hash;
    next();
  });
});

export const UserModel = mongoose.model<userDetails>('User', UserSchema);
