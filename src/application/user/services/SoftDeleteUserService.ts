import { NotFoundError } from '@infra/express/errors';

import { usersRepository } from '../infra/repositories/UsersRepository';

interface ServiceInterface {
  id: string;
}

export class SoftDeleteUserService {
  public async execute({ id }: ServiceInterface) {
    const user = await usersRepository.findById(id);

    if (!user) {
      throw new NotFoundError('user not found');
    }

    await usersRepository.update({ ...user, active: false });
  }
}
