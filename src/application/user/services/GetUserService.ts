import { NotFoundError } from '@infra/express/errors';

import { usersRepository } from '../infra/repositories/UsersRepository';

interface ServiceInterface {
  id: string;
}

export class GetUserService {
  public async execute({ id }: ServiceInterface) {
    const user = await usersRepository.findById(id);

    if (!user) {
      throw new NotFoundError('user not found');
    }

    return user;
  }
}
