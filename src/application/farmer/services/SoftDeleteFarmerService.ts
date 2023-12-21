import { Farmer } from '@application/@shared/types/entities';
import { Update } from '@application/@shared/types/helpers';

import farmersRepository from '../infra/repositories/FarmersRepository';
import { getFarmerService } from './GetFarmerService';

interface ServiceInterface {
  id: string;
  propertyId: string;
  familyId: string;
}

class SoftDeleteFarmerService {
  async execute({ id, propertyId, familyId }: ServiceInterface) {
    const farmer = await getFarmerService.execute({ id, propertyId, familyId });

    const data: Update<Farmer> = {
      id: farmer.id,
      name: farmer.name,
      nickname: farmer.nickname,
      cpf: farmer.cpf,
      phone: farmer.phone,
      address: farmer.address,
      gender: farmer.gender,
      course: farmer.course,
      credit_line: farmer.credit_line,
      marital_status: farmer.marital_status,
      family_id: farmer.family_id,
      active: false,
    };

    await farmersRepository.update(data);
  }
}

export const softDeleteFarmerService = new SoftDeleteFarmerService();
