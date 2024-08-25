import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

let mongoServer: MongoMemoryServer;

const connectTestDB = async () => {
  if (mongoose.connection.readyState >= 1) return;

  try {
    if (process.env.NODE_ENV === "test") {
      // Use MongoMemoryServer for an in-memory MongoDB instance
      mongoServer = await MongoMemoryServer.create();
      const mongoUri = mongoServer.getUri();
      await mongoose.connect(mongoUri);
      console.log("Connected to in-memory MongoDB instance");
    } else {
      const mongoUri = process.env.MONGODB_URI_TEST || "";
      await mongoose.connect(mongoUri);
      console.log("Database connected successfully");
    }
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw new Error("Failed to connect to MongoDB");
  }
};

export default connectTestDB;

// Close the MongoDB connection after tests
afterAll(async () => {
  if (mongoServer) {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await mongoServer.stop();
  } else {
    await mongoose.connection.close();
  }
});
