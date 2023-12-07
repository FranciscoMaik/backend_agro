import { NotFoundError } from '@infra/express/errors';

import { serviceOrdersRepository } from '../infra/repositories/ServiceOrdersRepository';

interface ServiceInterface {
  id: string;
}

class GetServiceOrderService {
  async execute({ id }: ServiceInterface) {
    const serviceOrder = await serviceOrdersRepository.findById(id);

    if (!serviceOrder) {
      throw new NotFoundError('service order not found');
    }

    return serviceOrder;
  }
}

export const getServiceOrderService = new GetServiceOrderService();
