import { AlreadyExistError, NotFoundError } from '@infra/express/errors';

import { User } from '@application/commons/types';

import { usersRepository } from '../infra/repositories/UsersRepository';

type ServiceInterface = User;

export class UpdateUserService {
  public async execute(user: ServiceInterface) {
    const userExists = await usersRepository.findById(user.id);

    if (!userExists) {
      throw new NotFoundError('user not found');
    }

    const isEmailChanged = userExists.email !== user.email;
    const isCpfChanged = userExists.cpf !== user.cpf;

    if (isEmailChanged) {
      const userEmailExists = await usersRepository.findByEmail(user.email);

      if (userEmailExists) {
        throw new AlreadyExistError('this email already exists');
      }
    }

    if (isCpfChanged) {
      const userCpfExists = await usersRepository.findByCpf(user.cpf);

      if (userCpfExists) {
        throw new AlreadyExistError('this cpf already exists');
      }
    }

    const updatedUser = await usersRepository.update(user);

    return updatedUser;
  }
}
