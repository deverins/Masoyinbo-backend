import mongoose, { Schema } from "mongoose";

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  isEmailVerified: { type: Boolean, default: false },
  otp: { type: Number, unique: true },
  userType: { type: String, default: "User", enum: ["User", "Admin"] },
  mobileNumber: { type: String, required: true },
  placeOfResidence: { type: String, required: true },
  socialMediaPlatform: { type: String, required: true },
  socialMediaHandle: { type: String, required: true },
  howDidYouFindOut: { type: [String], required: true },
});

export const UserModel = mongoose.model("User", UserSchema);
