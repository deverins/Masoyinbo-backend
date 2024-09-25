import { Request, Response, NextFunction } from 'express';
import { UserModel } from '../models/user';

interface CustomRequest extends Request {
  user?: {
    id: string;
    role: string;
  };
}

export const checkAdmin = async (req: CustomRequest, res: Response, next: NextFunction) => {
  try {
    const userId = req.body.userId;

    if (!userId) {
      return res.status(400).json({ message: 'User ID is required.' });
    }

    const user = await UserModel.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    req.user = {
      id: user._id.toString(),
      role: user.role,
    };

    next();
  } catch (error: any) {
    return res.status(500).json({ message: 'user authentication error', error: error.message });
  }
};
