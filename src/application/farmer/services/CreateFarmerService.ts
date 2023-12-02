import { AlreadyExistError, BadRequestError } from '@shared/errors';
import { Farmer } from '@shared/types';

import farmersRepository from '../infra/repositories/FarmersRepository';

interface ServiceInterface {
  name: string;
  nickname: string;
  gender: string;
  phone: string;
  cpf: string;
  address: string;
  marital_status: string;
  credit_line: string;
  course: string;
  userId: string;
}

class CreateFarmerService {
  async execute({
    name,
    nickname,
    address,
    course,
    cpf,
    credit_line,
    gender,
    marital_status,
    phone,
    userId,
  }: ServiceInterface) {
    if (cpf.length !== 11) {
      throw new BadRequestError('cpf must have 11 characters');
    }

    if (phone.length !== 13) {
      throw new BadRequestError('phone must have 13 characters');
    }

    const farmerCpfExists = await farmersRepository.findByCpf(cpf);

    if (farmerCpfExists) {
      throw new AlreadyExistError('this cpf already exists');
    }

    const farmerPhoneExists = await farmersRepository.findByPhone(phone);

    if (farmerPhoneExists) {
      throw new AlreadyExistError('this phone already exists');
    }

    const data: Omit<Farmer, 'id' | 'createdAt' | 'updatedAt'> = {
      name,
      nickname,
      address,
      course,
      cpf,
      credit_line,
      gender,
      marital_status,
      phone,
      active: true,
      user_id: userId,
    };

    const farmer = await farmersRepository.create(data);

    return farmer;
  }
}

export const createFarmerService = new CreateFarmerService();
