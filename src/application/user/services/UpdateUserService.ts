import { AlreadyExistError, BadRequestError } from '@shared/errors';
import { User } from '@shared/types';

import { usersRepository } from '../infra/repositories';
import { getUserService } from './GetUserService';

interface ServiceInterface {
  id: string;
  name: string;
  email: string;
  cpf: string;
  formation: string;
  address?: string | null;
}

class UpdateUserService {
  public async execute({
    id,
    email,
    cpf,
    name,
    formation,
    address,
  }: ServiceInterface) {
    if (cpf.length !== 11) {
      throw new BadRequestError('cpf must have 11 characters');
    }

    const user = await getUserService.execute({ id });

    const isEmailChanged = user.email !== email;
    const isCpfChanged = user.cpf !== cpf;

    if (isEmailChanged) {
      const userEmailExists = await usersRepository.findByEmail(email);

      if (userEmailExists) {
        throw new AlreadyExistError('this email already exists');
      }
    }

    if (isCpfChanged) {
      const userCpfExists = await usersRepository.findByCpf(cpf);

      if (userCpfExists) {
        throw new AlreadyExistError('this cpf already exists');
      }
    }

    const data: User = {
      id,
      email,
      cpf,
      name,
      formation,
      address,
      password: user.password,
      account_type: user.account_type,
      active: user.active,
      code: user.code,
      verified: isEmailChanged ? false : user.verified,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };

    const updatedUser = await usersRepository.update(data);

    return updatedUser;
  }
}

export const updateUserService = new UpdateUserService();
