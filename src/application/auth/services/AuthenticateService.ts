import { userTokenExpiration } from 'utils/constants';
import { isEmpty } from 'utils/validators';

import {
  BadRequestError,
  NotFoundError,
  UnauthorizedError,
} from '@infra/express/errors';

import { User } from '@application/commons/types';
import { usersRepository } from '@application/user/infra/repository/UsersRepository';

import { Crypter, Token } from '@libs';

interface RequestInterface {
  email: string;
  password: string;
}

export class AuthenticateService {
  public async execute({ email, password }: RequestInterface) {
    if (isEmpty(email) || isEmpty(password)) {
      throw new BadRequestError('email or password are empty');
    }

    const user: Partial<User | null> = await usersRepository.findByEmail(email);

    if (!user) {
      throw new NotFoundError('user not found');
    }

    const crypter = new Crypter();

    const isEqualPassword = await crypter.compare(password, user.password!);

    if (!isEqualPassword) {
      throw new UnauthorizedError('password is wrong');
    }

    const token = new Token(process.env.USER_TOKEN_KEY);

    const userToken = token.create(
      { id: user.id },
      { expiresIn: userTokenExpiration },
    );

    delete user.password;

    return {
      user,
      token: userToken,
    };
  }
}
