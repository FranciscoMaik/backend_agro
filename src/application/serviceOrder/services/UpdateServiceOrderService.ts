import { UnprocessableError } from '@infra/express/errors';

import { ServiceOrder } from '@application/@shared/types/entities';
import { Update } from '@application/@shared/types/helpers';

import { serviceOrdersRepository } from '../infra/repositories/ServiceOrdersRepository';
import { getServiceOrderService } from './GetServiceOrderService';

interface ServiceInterface {
  id: string;
  name: string;
  address: string;
  start_date: Date;
  end_date: Date;
  active: boolean;
  farmerId: string;
  familyId: string;
  propertyId: string;
}

class UpdateServiceOrderService {
  async execute({
    id,
    name,
    address,
    start_date,
    end_date,
    active,
    farmerId,
    familyId,
    propertyId,
  }: ServiceInterface) {
    const serviceOrder = await getServiceOrderService.execute({
      id,
      farmerId,
      familyId,
      propertyId,
    });

    if (start_date > end_date) {
      throw new UnprocessableError('start_date mus be greater then end_date');
    }

    const data: Update<ServiceOrder> = {
      id,
      name,
      address,
      start_date,
      end_date,
      active,
      farmer_id: serviceOrder.farmer_id,
    };

    const updatedServiceOrder = await serviceOrdersRepository.update(data);

    return updatedServiceOrder;
  }
}

export const updateServiceOrderService = new UpdateServiceOrderService();
