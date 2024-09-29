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
if (process.env.NODE_ENV === "test") {
  // Check if `afterAll` is defined, meaning we are in a Jest test environment
  if (typeof afterAll === "function") {
    afterAll(async () => {
      await mongoose.connection.close();
      console.log("MongoDB connection closed.");
    });
  }
}
export default connectTestDB;

