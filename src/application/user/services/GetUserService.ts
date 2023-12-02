import { NotFoundError } from '@shared/errors';

import { usersRepository } from '../infra/repositories';

interface ServiceInterface {
  id: string;
}

class GetUserService {
  public async execute({ id }: ServiceInterface) {
    const user = await usersRepository.findById(id);

    if (!user) {
      throw new NotFoundError('user not found');
    }

    return user;
  }
}

export const getUserService = new GetUserService();
