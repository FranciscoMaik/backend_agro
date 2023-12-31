import { userTokenExpiration } from '@utils/constants';

import { usersRepository } from '@application/user/infra/repositories';

import { NotFoundError, UnauthorizedError } from '@shared/errors';

import { Crypter, Token } from '@libs';

interface ServiceInterface {
  email: string;
  password: string;
}

class AuthenticateService {
  public async execute({ email, password }: ServiceInterface) {
    const user = await usersRepository.findByEmail(email);

    if (!user) {
      throw new NotFoundError('user not found');
    }

    const crypter = new Crypter();

    const isEqualPassword = await crypter.compare(password, user.password);

    if (!isEqualPassword) {
      throw new UnauthorizedError('password is wrong');
    }

    const token = new Token(process.env.USER_TOKEN_KEY);

    const authToken = token.create(
      { id: user.id },
      { expiresIn: userTokenExpiration },
    );

    return { user, token: authToken };
  }
}

export const authenticateService = new AuthenticateService();
