import { serviceOrdersRepository } from '../infra/repositories/ServiceOrdersRepository';
import { getServiceOrderService } from './GetServiceOrderService';

interface ServiceInterface {
  id: string;
  farmerId: string;
}

class DeleteServiceOrderService {
  async execute({ id, farmerId }: ServiceInterface) {
    const serviceOrder = await getServiceOrderService.execute({ id, farmerId });

    serviceOrdersRepository.delete(serviceOrder.id, farmerId);
  }
}

export const deleteServiceOrderService = new DeleteServiceOrderService();
