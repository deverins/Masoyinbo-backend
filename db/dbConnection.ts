import mongoose from "mongoose";
// import { FillDummyData } from "../controllers/episode/fill_dummy_data";

const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) return;

  try {
    await mongoose.connect(process.env.MONGODB_URI_DEV || "", {});
    console.log("Database connected successfully");
    console.log("Connected to database:", mongoose.connection.name);
    // Start filling dummy data without blocking the server
    // FillDummyData().then(() => {
    //   console.log("Dummy data has been filled successfully.");
    // }).catch((error) => {
    //   console.error("Error filling dummy data:", error);
    // });
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw new Error("Failed to connect to MongoDB");
  }

};

export default connectDB;