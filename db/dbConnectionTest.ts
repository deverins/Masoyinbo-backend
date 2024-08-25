// db/dbConnectionTest.ts
import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

let mongoServer: MongoMemoryServer;

const connectTestDB = async () => {
  if (mongoose.connection.readyState >= 1) return;

  console.log("Current NODE_ENV:", process.env.NODE_ENV);

  if (!process.env.NODE_ENV) {
    throw new Error("NODE_ENV is not set!");
  }

  try {
    if (process.env.NODE_ENV === "test") {
      // Use in-memory MongoDB instance during tests
      mongoServer = await MongoMemoryServer.create();
      const mongoUri = mongoServer.getUri();
      await mongoose.connect(mongoUri);
      console.log("Connected to in-memory MongoDB instance for testing");
    } else if (process.env.NODE_ENV === "development") {
      // Use development MongoDB URI
      const mongoUri = process.env.MONGODB_URI_DEV || "";
      await mongoose.connect(mongoUri);
      console.log("Connected to development MongoDB instance");
    } else {
      // Use production MongoDB URI
      const mongoUri = process.env.MONGODB_URI || "";
      await mongoose.connect(mongoUri);
      console.log("Connected to production MongoDB instance");
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
