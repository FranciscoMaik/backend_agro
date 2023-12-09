import { User } from '@application/@shared/types/entities';
import { Update } from '@application/@shared/types/helpers';

import { usersRepository } from '../infra/repositories';
import { getUserService } from './GetUserService';

interface ServiceInterface {
  id: string;
}

class SoftDeleteUserService {
  public async execute({ id }: ServiceInterface) {
    const user = await getUserService.execute({ id });

    const data: Update<User> = {
      id: user.id,
      email: user.email,
      name: user.name,
      cpf: user.cpf,
      formation: user.formation,
      address: user.address,
      account_type: user.account_type,
      verified: user.verified,
      password: user.password,
      active: false,
    };

    await usersRepository.update(data);
  }
}

export const softDeleteUserService = new SoftDeleteUserService();
