import { User } from '@application/@shared/types/entities';
import { Update } from '@application/@shared/types/helpers';

import { UnauthorizedError } from '@shared/errors';

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

    const data: Update<User> = {
      id: user.id,
      email: user.email,
      name: user.name,
      cpf: user.cpf,
      formation: user.formation,
      address: user.address,
      account_type: user.account_type,
      active: user.active,
      verified: user.verified,
      password: crypter.hash(newPassword),
    };

    await usersRepository.update(data);
  }
}

export const updatePasswordService = new UpdatePasswordService();
