import request from 'supertest';
import { UserModel } from '../models/user';
import app from '../index';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import connectTestDB from '../db/dbConnectionTest';

beforeAll(async () => {
  await connectTestDB()
});

afterAll(async () => {
  await mongoose.connection.close();
});

beforeEach(async () => {
  await UserModel.deleteOne({});
});

describe('createUser controller', () => {

  it('should create a new user and return 201 status code', async () => {
    const newUser = {
      fullName: 'Wunmi Ola',
      username: 'wunmi',
      email: 'adewunmi@gmail.com',
      password: '12345678',
    };

    const response = await request(app)
      .post('/v1/auth/signup')
      .send(newUser);

    expect(response.status).toBe(201);
    expect(response.body.message).toBe('Registration successful');
    expect(response.body.user).toHaveProperty('fullName', newUser.fullName);
    expect(response.body.user).toHaveProperty('username', newUser.username);
    expect(response.body.user).toHaveProperty('email', newUser.email);
    expect(response.body.user).not.toHaveProperty('password');
  });

  it('should return 400 status code for existing username or email', async () => {
    const existingUser = {
      fullName: 'Wunmi Ola',
      username: 'wunmi',
      email: 'adewunmi@gmail.com',
      password: '12345678',
    };

    /** Create an existing user before the test */
    await UserModel.create(existingUser);

    const newUser = {
      fullName: 'ade ola',
      username: 'deola',
      email: 'adewunmi@gmail.com',
      password: '12345678',
    };

    const response = await request(app)
      .post('/v1/auth/signup')
      .send(newUser);

    expect(response.status).toBe(400);
    expect(response.body.message).toBe('Username or email already exists');
  });


  it('should return 500 status code for Error creating user', async () => {
    /** Mock the save method on the UserModel prototype to simulate an error */
    jest.spyOn(UserModel.prototype, 'save').mockImplementationOnce(async () => {
      throw new Error('Database error');
    });

    const newUser = {
      fullName: 'ade ola',
      username: 'doe',
      email: 'adeola@gmail.com',
      password: '12345678',
    };

    const response = await request(app)
      .post('/v1/auth/signup')
      .send(newUser);

    expect(response.status).toBe(500);
    expect(response.body.message).toBe('Error creating user');
  });
});

describe('authenticateUser', () => {

  it('should authenticate user successfully with correct credentials', async () => {
    const user = await UserModel.create({
      fullName: 'Wunmi Ola',
      username: 'wunmi',
      email: 'adewunmi@gmail.com',
      password: "12345678",
    });

    const response = await request(app)
      .post('/v1/auth/login')
      .send({ email: 'adewunmi@gmail.com', password: '12345678' });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Login successful');
    expect(response.body.status).toBe(true);
    expect(response.body.user).toHaveProperty('fullName', user.fullName);
    expect(response.body.user).toHaveProperty('username', user.username);
    expect(response.body.user).toHaveProperty('email', user.email);
    expect(response.body.user).not.toHaveProperty('password');
  });

  it('should return 400 for invalid credentials', async () => {
    const passwordHash = await bcrypt.hash('12345678', 10);
    await UserModel.create({
      fullName: 'Wunmi Ola',
      username: 'wunmi',
      email: 'adewunmi@gmail.com',
      password: passwordHash,
    });

    const response = await request(app)
      .post('/v1/auth/login')
      .send({ email: 'adewunmi@gmail.com', password: 'wrongpassword' });

    expect(response.status).toBe(400);
    expect(response.body.message).toBe('Invalid credentials');
    expect(response.body.status).toBe(false);
  });

  it('should return 404 if user does not exist', async () => {
    const response = await request(app)
      .post('/v1/auth/login')
      .send({ email: 'nonexistent@gmail.com', password: '12345678' });

    expect(response.status).toBe(404);
    expect(response.body.message).toBe('User not found');
    expect(response.body.status).toBe(false);
  });

  it('should return 500 for server errors during authentication', async () => {
    jest.spyOn(UserModel, 'findOne').mockImplementationOnce(() => {
      throw new Error('Database error');
    });

    const response = await request(app)
      .post('/v1/auth/login')
      .send({ email: 'erroruser@gmail.com', password: '12345678' });

    expect(response.status).toBe(500);
    expect(response.body.message).toBe('Error authenticating user');
    expect(response.body).toHaveProperty('error');
    expect(response.body.status).toBe(false);
  });
});


describe('getUserByEmail', () => {
  it('should retrieve user successfully by email', async () => {
    const user = await UserModel.create({
      fullName: 'Wunmi Ola',
      username: 'wunmi',
      email: 'adewunmi@gmail.com',
      password: '12345678',
    });
    const response = await request(app)
      .get('/v1/auth/get-user')
      .query({ email: 'adewunmi@gmail.com' });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('User retrieved successfully');
    expect(response.body.status).toBe(true);
    expect(response.body.user).toHaveProperty('email', user.email);
    expect(response.body.user).not.toHaveProperty('password');
  });

  it('should return 404 if user is not found', async () => {
    const response = await request(app)
      .get('/v1/auth/get-user')
      .query({ email: ' adewunmi@gmail.com' });

    expect(response.status).toBe(404);
    expect(response.body.message).toBe('User not found');
  });

  it('should return 500 for server errors during authentication', async () => {
    jest.spyOn(UserModel, 'findOne').mockImplementationOnce(() => {
      throw new Error('Database error');
    });

    const response = await request(app)
      .post('/v1/auth/login')
      .send({ email: 'errouser@gmail.com', password: '12345678' });

    expect(response.status).toBe(500);
    expect(response.body.message).toBe('Error authenticating user');
    expect(response.body).toHaveProperty('error');
  });

});

it('should update user details successfully', async () => {
  const user = await UserModel.create({
    fullName: 'Wunmi Ola',
    username: 'wunmi',
    email: 'adewunmi@gmail.com',
    password: '12345678',
  });

  const updatedUser = {
    fullName: 'Wunmi Ola Updated',
    email: 'adewunmi.updated@gmail.com',
  };
  const response = await request(app)
    .put(`/v1/auth/update-user/${user.username}`)
    .send(updatedUser);

  expect(response.status).toBe(200);
  expect(response.body.message).toBe('User updated successfully');

  // Validate updated user details in the response
  expect(response.body.user).toHaveProperty('fullName', updatedUser.fullName);
  expect(response.body.user).toHaveProperty('email', updatedUser.email);
  expect(response.body.user).not.toHaveProperty('password');

  // Verify the user was updated in the database
  const updatedUserInDB = await UserModel.findOne({ username: user.username });
  if (updatedUserInDB) {
    expect(updatedUserInDB.fullName).toEqual(updatedUser.fullName);
    expect(updatedUserInDB.email).toEqual(updatedUser.email);
  }
});
