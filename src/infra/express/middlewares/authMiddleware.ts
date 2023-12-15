import { NextFunction, Request, Response } from 'express';
import { JsonWebTokenError } from 'jsonwebtoken';

import { Token } from '@libs';

import { UnauthorizedError } from '../errors';

interface TokenError extends JsonWebTokenError {
  name: 'TokenExpiredError' | 'JsonWebTokenError';
}

interface TokenPayload {
  id: string;
  iad: number;
  exp: number;
}

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { authorization } = req.headers;

  if (!authorization) {
    throw new UnauthorizedError('authorization is required');
  }

  const token = new Token(process.env.USER_TOKEN_KEY);

  const authToken = token.read(authorization);

  try {
    const data = token.verify(authToken);

    const { id } = data as TokenPayload;

    req.userId = id;

    return next();
  } catch (err) {
    const error = err as TokenError;

    const messages = {
      TokenExpiredError: 'token has expired',
      JsonWebTokenError: 'token is not valid',
    };

    const errorMessage = messages[error.name] || error.message;

    throw new UnauthorizedError(errorMessage);
  }
};
