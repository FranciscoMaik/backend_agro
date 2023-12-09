import { BadRequestError } from '@infra/express/errors';

import { ServiceOrder } from '@application/@shared/types';

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
  }: ServiceInterface) {
    const serviceOrder = await getServiceOrderService.execute({ id, farmerId });

    if (start_date > end_date) {
      throw new BadRequestError('start_date mus be greater then end_date');
    }

    const data: ServiceOrder = {
      id,
      name,
      address,
      start_date,
      end_date,
      active,
      farmer_id: serviceOrder.farmer_id,
      user_id: serviceOrder.user_id,
      createdAt: serviceOrder.createdAt,
      updatedAt: serviceOrder.updatedAt,
    };

    const updatedServiceOrder = await serviceOrdersRepository.update(data);

    return updatedServiceOrder;
  }
}

export const updateServiceOrderService = new UpdateServiceOrderService();
