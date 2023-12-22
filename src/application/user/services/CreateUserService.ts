import { User } from '@application/@shared/types/entities';
import { Create } from '@application/@shared/types/helpers';
import { sendEmailVerificationCodeService } from '@application/auth/services';

import { AlreadyExistError, UnprocessableError } from '@shared/errors';

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
      throw new UnprocessableError('cpf must have 11 characters');
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

    const data: Create<User> = {
      email,
      name,
      cpf,
      address,
      formation,
      account_type: 'user',
      active: true,
      verified: false,
      password: crypter.hash(password),
    };

    const user = await usersRepository.create(data);

    sendEmailVerificationCodeService.execute({ email });

    return user;
  }
}

export const createUserService = new CreateUserService();
