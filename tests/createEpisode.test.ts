import request from 'supertest';
import mongoose from 'mongoose';
import connectTestDB from '../db/dbConnectionTest';
import { EpisodeModel } from '../models/episode';
import { Participants } from '../models/participants';
import app from '../index';

beforeAll(async () => {
  await connectTestDB();
});

afterAll(async () => {
  await mongoose.connection.close();
});

beforeEach(async () => {
  await EpisodeModel.deleteMany({});
  await Participants.deleteMany({});
}, 10000);


describe('createEpisode controller', () => {

  it('should create a new episode successfully', async () => {
    // Create a mock participant with status 'Completed'
    const participant = new Participants({
      fullName: 'Test Participant',
      email: 'participant@example.com',
      status: 'Completed',
      mobileNumber: '1234567890',
      gender: 'Male',
      state: 'Lagos',
      placeOfResidence: 'Ikeja',
      platformLink: 'https://example.com',
      socialMediaHandle: '@johndoe',
      source: ['Referral'],
      comment: 'Looking forward to the program!',
    });

    await participant.save();

    const episodeData = {
      episodeLink: 'https://example.com/episode',
      participant_id: participant._id,
      createdBy: new mongoose.Types.ObjectId(),
      amountWon: 50000,
    };

    const response = await request(app)
      .post('/v1/api/create-episode')
      .send(episodeData);

    expect(response.status).toBe(201);
    expect(response.body.message).toBe('Episode created successfully');
    expect(response.body.episode).toHaveProperty('episodeLink', episodeData.episodeLink);
    expect(response.body.episode).toHaveProperty('participant_id', participant._id.toString());
    expect(response.body.episode).toHaveProperty('amountWon', episodeData.amountWon);
  });

  it('should return 404 if participant is not found', async () => {
    const episodeData = {
      episodeLink: 'https://example.com/episode',
      participant_id: new mongoose.Types.ObjectId(),
      createdBy: new mongoose.Types.ObjectId(),
      amountWon: 50000,
    };

    const response = await request(app)
      .post('/v1/api/create-episode')
      .send(episodeData);

    expect(response.status).toBe(404);
    expect(response.body.message).toBe('Participant not found');
  });

  it('should return 400 if participant status is not "Completed"', async () => {
    // Create a mock participant with status other than 'Completed'
    const participant = new Participants({
      fullName: 'Test Participant',
      email: 'participant@example.com',
      status: 'Pending',
      mobileNumber: '1234567890',
      gender: 'Male',
      state: 'Lagos',
      placeOfResidence: 'Ikeja',
      platformLink: 'https://example.com',
      socialMediaHandle: '@johndoe',
      source: ['Referral'],
      comment: 'Looking forward to the program!',
    });

    await participant.save();

    const episodeData = {
      episodeLink: 'https://example.com/episode',
      participant_id: participant._id,
      createdBy: new mongoose.Types.ObjectId(),
      amountWon: 50000,
    };

    const response = await request(app)
      .post('/v1/api/create-episode')
      .send(episodeData);

    expect(response.status).toBe(400);
    expect(response.body.message).toBe('Participant must have a status of Completed to be assigned an episode');
  });

  it('should handle unexpected errors and return 500', async () => {
    // Mock the save method to throw an error
    jest.spyOn(EpisodeModel.prototype, 'save').mockImplementationOnce(() => {
      throw new Error('Database error');
    });

    const participant = new Participants({
      fullName: 'Test Participant',
      email: 'participant@example.com',
      status: 'Completed',
      mobileNumber: '1234567890',
      gender: 'Male',
      state: 'Lagos',
      placeOfResidence: 'Ikeja',
      platformLink: 'https://example.com',
      socialMediaHandle: '@johndoe',
      source: ['Referral'],
      comment: 'Looking forward to the program!',
    });

    await participant.save();

    const episodeData = {
      episodeLink: 'https://example.com/episode',
      participant_id: participant._id,
      createdBy: new mongoose.Types.ObjectId(),
      amountWon: 50000,
    };

    const response = await request(app)
      .post('/v1/api/create-episode')
      .send(episodeData);

    expect(response.status).toBe(500);
    expect(response.body.message).toBe('Error creating episode');

    jest.restoreAllMocks();
  });

});
