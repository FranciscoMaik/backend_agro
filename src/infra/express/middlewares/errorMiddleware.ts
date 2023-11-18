import { NextFunction, Request, Response } from 'express';

import { ApiError } from '../errors';

export const errorMiddleware = (
  error: Error & ApiError,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const statusCode = error.statusCode ?? 500;
  const message = error.message;

  console.log(message);

  res.status(statusCode).json({ message });
};
