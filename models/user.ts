import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  isEmailVerified: { type: Boolean, default: false },
  password: { type: String, required: true },
  otp: { type: Number, unique: true },
  userType: { type: String, default: 'User', enum: ['User', 'Admin'] },
  mobileNumber: { type: String, required: true },
  placeOfResidence: { type: String, required: true },
  socialMediaPlatform: { type: String, required: true },
  socialMediaHandle: { type: String, required: true },
  howDidYouFindOut: { type: [String], required: true },
});

UserSchema.pre("save", function (next) {
  const user = this;

  bcrypt.hash(user.password as string, 10, (err, hash) => {
    if (err) return next(err);
    user.password = hash;
    next();
  });
});


export const UserModel = mongoose.model('User', UserSchema);
