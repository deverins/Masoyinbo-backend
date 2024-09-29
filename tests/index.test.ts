import request from 'supertest';
import connectTestDB from '../db/dbConnectionTest';
import mongoose from 'mongoose';
import app from '../index';


beforeAll(async () => {
  await connectTestDB();
});
afterAll(async () => {
  await mongoose.connection.close();
});
describe("Express Application Tests", () => {

  it("should return a welcome message from the root route", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Welcome to Másòyìnbó Project");
  });

  it("should return a 404 status for an unknown route", async () => {
    const response = await request(app).get("/unknown-route");
    expect(response.status).toBe(404);
    expect(response.body.message).toBe("Route not found on our server");
  });

  it("should return a 500 status for an internal server error", async () => {
    // Create a route to simulate an error
    app.get("/error", (req, res, next) => {
      next(new Error("Test error"));
    });

    const response = await request(app).get("/error");
    expect(response.status).toBe(500);
    expect(response.body.message).toBe("Test error");
    if (process.env.NODE_ENV === "development") {
      expect(response.body.stack).toBeDefined();
    } else {
      expect(response.body.stack).toBeUndefined();
    }
  });
});
