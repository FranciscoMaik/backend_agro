import { BadRequestError } from '@infra/express/errors';

import { ServiceOrder } from '@application/@shared/types/entities';
import { Create } from '@application/@shared/types/helpers';
import { getFarmerService } from '@application/farmer/services';

import { serviceOrdersRepository } from '../infra/repositories/ServiceOrdersRepository';

interface ServiceInterface {
  name: string;
  address: string;
  start_date: Date;
  end_date: Date;
  farmerId: string;
  familyId: string;
  propertyId: string;
}

class CreateServiceOrderService {
  async execute({
    name,
    address,
    start_date,
    end_date,
    farmerId,
    propertyId,
    familyId,
  }: ServiceInterface) {
    const farmer = await getFarmerService.execute({
      id: farmerId,
      familyId,
      propertyId,
    });

    if (new Date(start_date) >= new Date(end_date)) {
      throw new BadRequestError('start_date must be greater then end_date');
    }

    const data: Create<ServiceOrder> = {
      name,
      address,
      start_date,
      end_date,
      active: true,
      farmer_id: farmer.id,
    };

    const serviceOrder = await serviceOrdersRepository.create(data);

    return serviceOrder;
  }
}

export const createServiceOrderService = new CreateServiceOrderService();
