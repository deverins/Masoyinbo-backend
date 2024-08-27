import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config({ path: '.env.test' });


const connectTestDB = async () => {
  if (mongoose.connection.readyState >= 1) return;

  if (!process.env.NODE_ENV || process.env.NODE_ENV !== "test") {
    throw new Error("NODE_ENV is not set to 'test'!");
  }
  try {
    const mongoUri = process.env.MONGODB_URI_TEST || "";
    await mongoose.connect(mongoUri);
    console.log("Connected to database:", mongoose.connection.name);
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw new Error("Failed to connect to MongoDB");
  }
};
// Close the MongoDB connection after tests (only in Jest environment)
if (process.env.NODE_ENV === "test") {
  afterAll(async () => {
    await mongoose.connection.close();
  });
}
export default connectTestDB;

