import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { UserModel } from '../models/user';
import { excludeFields, findUser } from '../utils/common.methods';


/** Create a new user
 * 
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 * @returns {void}
 */
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
    return res.status(201).json({ message: "Registration successful", status: true, user: _newUser });
  } catch (error) {
    return res.status(500).json({ message: 'Error creating user', error });
  }
};

/** Authenticate a user 
 * 
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 * @returns {void}
*/
export const authenticateUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    /** Find the user by username */
    const user = await findUser({ email });
    if (!user || !user.password) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    /** Compare the provided password with the stored hashed password */
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials', status: false });
    }

    const _user = excludeFields(user.toObject(), ['password', '__v']);
    return res.status(200).json({ message: "Login successful", status: true, user: _user });
  } catch (error) {
    return res.status(500).json({ message: 'Error authenticating user', error });
  }
};

/**
 * Fetches user details based on the unique user's name.
 * 
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 * @returns {void}
 */
export const getUserByUsername = async (req: Request, res: Response) => {
  try {
    const { username } = req.params;

    // Find the user by username
    const user = await findUser({ username });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const responseUser = excludeFields(user.toObject(), ['password', '__v']);
    return res.status(200).json(responseUser);
  } catch (error) {
    return res.status(500).json({ message: 'Error retrieving user', error });
  }
};

/** Update user information
 * 
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 */
export const updateUser = async (req: Request, res: Response) => {
  try {
    const { username } = req.params;
    const { fullName, email } = req.body;

    /** Find the user by username and update the details */
    const user = await UserModel.findOneAndUpdate({ username }, { fullName, email }, { new: true });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const _user = excludeFields(user.toObject(), ['password', '__v']);
    return res.status(200).json(_user);
  } catch (error) {
    return res.status(500).json({ message: 'Error updating user', error });
  }
};