import request from 'supertest';
import mongoose from "mongoose";
import connectTestDB from "../db/dbConnectionTest";
import app from '../index';
import { Participants } from '../models/participants';

beforeAll(async () => {
  await connectTestDB();
});

afterAll(async () => {
  await mongoose.connection.close();
});

beforeEach(async () => {
  await Participants.deleteMany({});
});

describe('createParticipant controller', () => {

  it('should create a new participant and return 201 status code', async () => {
    const newParticipant = {
      fullName: 'Wunmi Ola',
      email: 'adewunmi@gmail.com',
      mobileNumber: '1234567890',
      gender: 'Male',
      state: 'Lagos',
      placeOfResidence: 'Ikeja',
      platformLink: 'https://example.com',
      socialMediaHandle: '@johndoe',
      source: ['Referral'],
      comment: 'Looking forward to the program!',
    };

    const response = await request(app)
      .post('/v1/auth/create-participant')
      .send(newParticipant);

    expect(response.status).toBe(201);
    expect(response.body.message).toBe('Participant created successfully');
    expect(response.body.data).toHaveProperty('fullName', newParticipant.fullName);
    expect(response.body.data).toHaveProperty('email', newParticipant.email);
    expect(response.body.data).toHaveProperty('status', 'Pending');
    expect(response.body.data).toHaveProperty('mobileNumber', newParticipant.mobileNumber);
    expect(response.body.data).toHaveProperty('gender', newParticipant.gender);
    expect(response.body.data).toHaveProperty('state', newParticipant.state);
    expect(response.body.data).toHaveProperty('placeOfResidence', newParticipant.placeOfResidence);
    expect(response.body.data).toHaveProperty('platformLink', newParticipant.platformLink);
    expect(response.body.data).toHaveProperty('socialMediaHandle', newParticipant.socialMediaHandle);
    expect(response.body.data).toHaveProperty('source', newParticipant.source);
    expect(response.body.data).toHaveProperty('comment', newParticipant.comment);
  });

  it('should return 409 status code for existing email', async () => {
    const existingParticipant = {
      fullName: 'Mide ola',
      email: 'adewunmi@gmail.com',
      mobileNumber: '0987654321',
      gender: 'Female',
      state: 'Lagos',
      placeOfResidence: 'Ikeja',
      platformLink: 'https://example.com',
      socialMediaHandle: '@janedoe',
      source: ['Referral'],
      comment: 'Excited for the event!',
    };

    // Create an existing participant before the test
    await Participants.create(existingParticipant);

    const newParticipant = {
      fullName: 'Ola mide',
      email: 'adewunmi@gmail.com',
      mobileNumber: '1112223333',
      gender: 'Female',
      state: 'Lagos',
      placeOfResidence: 'Ikeja',
      platformLink: 'https://example.com',
      socialMediaHandle: '@olamide',
      source: ['Advertisement'],
      comment: 'Can’t wait!',
    };

    const response = await request(app)
      .post('/v1/auth/create-participant')
      .send(newParticipant);

    expect(response.status).toBe(409);
    expect(response.body.error).toBe('Email address has already been registered');
  });

  it('should return 500 status code for error during participant creation', async () => {
    // Mock the save method on the Participants prototype to simulate an error
    jest.spyOn(Participants.prototype, 'save').mockImplementationOnce(async () => {
      throw new Error('Database error');
    });

    const newParticipant = {
      fullName: 'Wunmi Ola',
      email: 'adewunmi@gmail.com',
      mobileNumber: '1234567890',
      gender: 'Male',
      state: 'Lagos',
      placeOfResidence: 'Ikeja',
      platformLink: 'https://example.com',
      socialMediaHandle: '@johndoe',
      source: ['Referral'],
      comment: 'Looking forward to the program!',
    };

    const response = await request(app)
      .post('/v1/auth/create-participant')
      .send(newParticipant);

    expect(response.status).toBe(500);
    expect(response.body.message).toBe('Error creating participant');

    jest.restoreAllMocks();
  });

});


describe('getParticipants controller', () => {

  it('should return all participants and a 200 status code', async () => {
    const participants = [
      {
        fullName: 'Wunmi ola',
        email: 'wunmiola@example.com',
        mobileNumber: '1234567890',
        gender: 'Male',
        state: 'Lagos',
        placeOfResidence: 'Ikeja',
        platformLink: 'https://example.com',
        socialMediaHandle: '@wunmiola',
        source: ['Referral'],
        comment: 'Looking forward to the program!',
      },
      {
        fullName: 'Ola wunmi',
        email: 'olawunmi@example.com',
        mobileNumber: '0987654321',
        gender: 'Female',
        state: 'Lagos',
        placeOfResidence: 'Ikeja',
        platformLink: 'https://example.com',
        socialMediaHandle: '@olawunmi',
        source: ['Advertisement'],
        comment: 'Excited for the event!',
      },
    ];

    await Participants.insertMany(participants);

    const response = await request(app)
      .get('/v1/api/get-participants')
      .send();

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Participants retrieved successfully');
    expect(response.body.data).toHaveLength(participants.length);
    expect(response.body.data[0]).toHaveProperty('email', participants[0].email);
    expect(response.body.data[1]).toHaveProperty('email', participants[1].email);
  });

  it('should return 500 status code if there is an error during retrieval', async () => {
    // Mock the find method on the Participants model to simulate an error
    jest.spyOn(Participants, 'find').mockImplementationOnce(() => {
      throw new Error('Database error');
    });

    const response = await request(app)
      .get('/v1/api/get-participants')
      .send();

    expect(response.status).toBe(500);
    expect(response.body.message).toBe('Error fetching participants');
    expect(response.body).toHaveProperty('error');

    jest.restoreAllMocks();
  });

});