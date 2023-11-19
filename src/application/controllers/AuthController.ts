import { Request, Response } from 'express';
import { userTokenExpiration } from 'utils/constants';
import { isEmpty } from 'utils/validators';

import {
  BadRequestError,
  NotFoundError,
  UnauthorizedError,
} from '@application/errors';
import { usersRepository } from '@application/repositories';
import { User } from '@application/types';

import { Crypter, Token } from '@libs';

interface AuthenticateRequest {
  email: string;
  password: string;
}

class AuthController {
  public async authenticate(req: Request, res: Response) {
    const { email, password } = req.body as AuthenticateRequest;

    if (isEmpty(email) || isEmpty(password)) {
      throw new BadRequestError('Email or password are empty');
    }

    const user: Partial<User | null> = await usersRepository.findByEmail(email);

    if (!user) {
      throw new NotFoundError('User not found');
    }

    const crypter = new Crypter();

    const isEqualPassword = await crypter.compare(password, user.password!);

    if (!isEqualPassword) {
      throw new UnauthorizedError('Password are wrong');
    }

    const token = new Token(process.env.USER_TOKEN_KEY);

    const userToken = token.create(
      { id: user.id },
      { expiresIn: userTokenExpiration },
    );

    delete user.password;

    res.status(200).json({ user, token: userToken });
  }
}

export default new AuthController();
