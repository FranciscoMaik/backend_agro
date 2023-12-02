import { UnauthorizedError } from '@shared/errors';
import { User } from '@shared/types';

import { Crypter } from '@libs';

import { usersRepository } from '../infra/repositories';
import { getUserService } from './GetUserService';

interface ServiceInterface {
  id: string;
  password: string;
  newPassword: string;
}

class UpdatePasswordService {
  async execute({ id, password, newPassword }: ServiceInterface) {
    const user = await getUserService.execute({ id });

    const crypter = new Crypter();

    const isEqualPassword = await crypter.compare(password, user.password);

    if (!isEqualPassword) {
      throw new UnauthorizedError('password is wrong');
    }

    const data: User = {
      ...user,
      password: crypter.hash(newPassword),
    };

    await usersRepository.update(data);
  }
}

export const updatePasswordService = new UpdatePasswordService();