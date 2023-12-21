import { Farmer } from '@application/@shared/types/entities';
import { Update } from '@application/@shared/types/helpers';

import { AlreadyExistError, BadRequestError } from '@shared/errors';

import farmersRepository from '../infra/repositories/FarmersRepository';
import { getFarmerService } from './GetFarmerService';

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
  propertyId: string;
  familyId: string;
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
    propertyId,
    familyId,
  }: ServiceInterface) {
    if (cpf.length !== 11) {
      throw new BadRequestError('cpf must have 11 characters');
    }

    if (phone.length !== 13) {
      throw new BadRequestError('phone must have 13 characters');
    }

    const farmer = await getFarmerService.execute({ id, propertyId, familyId });

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

    const data: Update<Farmer> = {
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
      family_id: farmer.family_id,
    };

    const updatedFarmer = await farmersRepository.update(data);

    return updatedFarmer;
  }
}

export const updateFarmerService = new UpdateFarmerService();
