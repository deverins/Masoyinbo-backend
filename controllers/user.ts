import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { UserModel } from '../models/user';
import { excludeFields, findUser } from '../utils/common.methods';





/** Create a new user */
export const createUser = async (req: Request, res: Response) => {
  try {
    const { fullName, username, email, password } = req.body;

    /** Check if the username or email already exists */
    const existingUser = await findUser({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.status(400).json({ message: 'Username or email already exists' });
    }

    /** Create a new user instance and save to database */
    const newUser = new UserModel({ fullName, username, email, password });
    await newUser.save();

    const _newUser = excludeFields(newUser.toObject(), ['password', '__v']);
    return res.status(201).json({message: "Registration successful", status: true, user: _newUser});
  } catch (error) {
    return res.status(500).json({ message: 'Error creating user', error });
  }
};