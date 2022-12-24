import { NextFunction, Request, Response } from 'express';
import {
  UpdateUserInput,
  DeleteUserInput
} from '../schemas/user.schema';
import { findUserById } from '../services/user.service';
import AppError from '../utils/appError';

export const getMeHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = res.locals.user;

    res.status(200).status(200).json({
      status: 'success',
      data: {
        user,
      },
    });
  } catch (err: any) {
    next(err);
  }
};
export const deleteUserHandler = async (
  req: Request<DeleteUserInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await findUserById(req.params.userId);

    if (!user) {
      return next(new AppError(404, 'User with that ID not found'));
    }

    await user.remove();

    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err: any) {
    next(err);
  }
};

export const updateUserHandler = async (
  req: Request<UpdateUserInput['params'], {}, UpdateUserInput['body']>,
  res: Response,
  next: NextFunction
) => {
  try {
    const User = await findUserById(req.params.userId);

    if (!User) {
      return next(new AppError(404, 'User with that ID not found'));
    }

    Object.assign(User, req.body);

    const updatedUser = await User.save();

    res.status(200).json({
      status: 'success',
      data: {
        User: updatedUser,
      },
    });
  } catch (err: any) {
    next(err);
  }
};