import { sendEmailVerificationService } from '@application/auth/services';

import { AlreadyExistError, BadRequestError } from '@shared/errors';
import { User } from '@shared/types';

import { Crypter } from '@libs';

import { usersRepository } from '../infra/repositories';

interface ServiceInterface {
  email: string;
  name: string;
  cpf: string;
  password: string;
  formation: string;
  address?: string | null;
}

class CreateUserService {
  public async execute({
    email,
    cpf,
    name,
    password,
    formation,
    address,
  }: ServiceInterface) {
    if (cpf.length !== 11) {
      throw new BadRequestError('cpf must have 11 characters');
    }

    const userEmailExists = await usersRepository.findByEmail(email);

    if (userEmailExists) {
      throw new AlreadyExistError('this email already exists');
    }

    const userCpfExists = await usersRepository.findByCpf(cpf);

    if (userCpfExists) {
      throw new AlreadyExistError('this cpf already exists');
    }

    const crypter = new Crypter();

    const data: Omit<User, 'id' | 'createdAt' | 'updatedAt'> = {
      email,
      name,
      cpf,
      address,
      formation,
      account_type: 'user',
      code: null,
      active: true,
      verified: false,
      password: crypter.hash(password),
    };

    const user = await usersRepository.create(data);

    sendEmailVerificationService.execute({ email });

    return user;
  }
}

export const createUserService = new CreateUserService();
