// test/index.test.ts
import request from 'supertest';
import app from '../index';
import mongoose from 'mongoose';
import { UserModel } from '../models/user';



describe('Root Route', () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI_TEST || '', {});
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  afterEach(async () => {
    await UserModel.deleteMany({});
  });

  it('should return a welcome message', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Welcome to Másòyìnbó Project');
  });
});

describe('Error Handling', () => {
  it('should handle a 404 error', async () => {
    const response = await request(app).get('/non-existent-route');
    expect(response.status).toBe(404);
    expect(response.body.message).toBe('Route not found on our server');
  });

  it('should handle a generic error', async () => {
    // Simulate an error by throwing an exception in a route handler
    const response = await request(app).get('/error');
    expect(response.status).toBe(500);
    expect(response.body.message).toBe('Test error');
  });
});
