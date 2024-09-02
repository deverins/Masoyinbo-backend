// tests/handleEpisodeEvent.test.ts
import request from 'supertest';
import mongoose from 'mongoose';
import connectTestDB from '../db/dbConnectionTest';
import app from '../index';
import { EpisodeModel } from '../models/episode';
import { EpisodeEventsModel } from '../models/episodeEvents';

beforeAll(async () => {
  await connectTestDB();
});

afterAll(async () => {
  await mongoose.connection.close();
});

beforeEach(async () => {
  await EpisodeModel.deleteMany({});
  await EpisodeEventsModel.deleteMany({});
});

describe('handleEpisodeEvent controller', () => {
  it('should handle episode event successfully and return 200 status code', async () => {
    const creatorId = new mongoose.Types.ObjectId();
    const participantId = new mongoose.Types.ObjectId();
    const episode = await EpisodeModel.create({
      initialBalance: 1000000,
      totalMoneyDeducted: 0,
      noQuestionsGotten: 0,
      totalCorrectAnswers: 0,
      noQuestionsMissed: 0,
      createdBy: creatorId,
      participant_id: participantId,
      amountWon: 0,
      totalQuestionAttempted: 0,
      episodeLink: 'http://example.com/episode-link',
    });

    console.log('Created Episode ID:', episode._id);

    const questions = [
      {
        question: 'What is the capital of France?',
        response: 'Paris',
        correctAnswer: 'Paris',
      },
      {
        question: 'What is 2 + 2?',
        response: '4',
        correctAnswer: '4',
      },
    ];

    const response = await request(app)
      .post('/v1/api/episode-events')
      .send({ episodeId: episode._id.toString(), questions });

    console.log('Response:', response.body);

    // Verify response status and message
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Episode event handled successfully');

    // Verify episode events in the database
    const episodeEvents = await EpisodeEventsModel.find({});
    expect(episodeEvents).toHaveLength(2);

    // Verify updated episode
    const updatedEpisode = await EpisodeModel.findById(episode._id);
    expect(updatedEpisode).toBeDefined();
    expect(updatedEpisode?.initialBalance).toBeLessThan(1000000);
    expect(updatedEpisode?.totalMoneyDeducted).toBeGreaterThan(0);
  });

  it('should return 404 if episode or participant is not found', async () => {
    const questions = [
      {
        question: 'What is the capital of France?',
        response: 'Paris',
        correctAnswer: 'Paris',
      },
    ];

    const response = await request(app)
      .post('/v1/api/episode-events')
      .send({ episodeId: new mongoose.Types.ObjectId(), questions });

    console.log('Response for 404 case:', response.body);

    expect(response.status).toBe(404);
    expect(response.body.message).toBe('Episode or Participant not found');
  });

  it('should return 500 status code for error during episode event handling', async () => {
    // Mock the findById method on EpisodeModel to throw an error
    jest.spyOn(EpisodeModel, 'findById').mockImplementationOnce(() => {
      throw new Error('Database error');
    });

    const questions = [
      {
        question: 'What is the capital of France?',
        response: 'Paris',
        correctAnswer: 'Paris',
      },
    ];

    const response = await request(app)
      .post('/v1/api/episode-events')
      .send({ episodeId: new mongoose.Types.ObjectId(), questions });

    console.log('Response for 500 case:', response.body);

    expect(response.status).toBe(500);
    expect(response.body.message).toBe('Error handling episode event');

    jest.restoreAllMocks();
  });
});

describe('getEpisodeStats controller', () => {
  it('should return correct episode statistics with 200 status code', async () => {
    // Create mock episodes in the database
    const creatorId = new mongoose.Types.ObjectId();
    const participantId = new mongoose.Types.ObjectId();

    await EpisodeModel.create([
      {
        initialBalance: 1000000,
        totalMoneyDeducted: 100000,
        totalCorrectAnswers: 2,
        totalQuestionAttempted: 2,
        amountWon: 500000,
        createdBy: creatorId,
        participant_id: participantId,
        noQuestionsMissed: 0,
        noQuestionsGotten: 2,
        episodeLink: 'http://example.com/episode-link',
      },
      {
        initialBalance: 800000,
        totalMoneyDeducted: 200000,
        totalCorrectAnswers: 3,
        totalQuestionAttempted: 4,
        amountWon: 300000,
        createdBy: creatorId,
        participant_id: participantId,
        noQuestionsMissed: 1,
        noQuestionsGotten: 3,
        episodeLink: 'http://example.com/episode-link',
      },
    ]);

    const response = await request(app).get('/v1/api/episode-stats');

    expect(response.status).toBe(200);
    expect(response.body.stats.totalEpisodes).toBe(2);
    expect(response.body.stats.totalAmountWon).toBe(800000);
    expect(response.body.stats.totalAskedQuestions).toBe(6);
    expect(response.body.stats.totalRightQuestions).toBe(5);
    expect(response.body.stats.requestPool).toBe(1800000);
  });

  it('should return 500 status code if an error occurs', async () => {
    // Simulate an error
    jest.spyOn(EpisodeModel, 'countDocuments').mockImplementationOnce(() => {
      throw new Error('Database error');
    });

    const response = await request(app).get('/v1/api/episode-stats');

    expect(response.status).toBe(500);
    expect(response.body.message).toBe('Error retrieving episode statistics');

    jest.restoreAllMocks();
  });
});
