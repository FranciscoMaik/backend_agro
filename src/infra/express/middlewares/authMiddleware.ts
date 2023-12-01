import { NextFunction, Request, Response } from 'express';

import { Token } from '@libs';

import { UnauthorizedError } from '../errors';

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
  } catch {
    throw new UnauthorizedError('token is not valid');
  }
};
