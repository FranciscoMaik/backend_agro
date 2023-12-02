import {
  AlreadyExistError,
  BadRequestError,
  NotFoundError,
} from '@shared/errors';
import { Farmer } from '@shared/types';

import farmersRepository from '../infra/repositories/FarmersRepository';

interface ServiceInterface {
  id: string;
  name: string;
  nickname: string;
  gender: string;
  phone: string;
  cpf: string;
  address: string;
  marital_status: string;
  credit_line: string;
  course: string;
}

class UpdateFarmerService {
  async execute({
    id,
    name,
    nickname,
    cpf,
    phone,
    address,
    gender,
    course,
    credit_line,
    marital_status,
  }: ServiceInterface) {
    if (cpf.length !== 11) {
      throw new BadRequestError('cpf must have 11 characters');
    }

    if (phone.length !== 13) {
      throw new BadRequestError('phone must have 13 characters');
    }

    const farmer = await farmersRepository.findById(id);

    if (!farmer) {
      throw new NotFoundError('farmer not found');
    }

    const isCpfChanged = farmer.cpf !== cpf;
    const isPhoneChanged = farmer.phone !== phone;

    if (isCpfChanged) {
      const farmerCpfExists = await farmersRepository.findByCpf(cpf);

      if (farmerCpfExists) {
        throw new AlreadyExistError('this cpf already exists');
      }
    }

    if (isPhoneChanged) {
      const farmerPhoneExists = await farmersRepository.findByPhone(phone);

      if (farmerPhoneExists) {
        throw new AlreadyExistError('this phone already exists');
      }
    }

    const data: Farmer = {
      id,
      name,
      nickname,
      cpf,
      phone,
      address,
      gender,
      course,
      credit_line,
      marital_status,
      active: farmer.active,
      user_id: farmer.user_id,
      updatedAt: farmer.updatedAt,
      createdAt: farmer.createdAt,
    };

    const updatedFarmer = await farmersRepository.update(data);

    return updatedFarmer;
  }
}

export const updateFarmerService = new UpdateFarmerService();
