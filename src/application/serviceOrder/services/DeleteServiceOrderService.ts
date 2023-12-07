import { serviceOrdersRepository } from '../infra/repositories/ServiceOrdersRepository';
import { getServiceOrderService } from './GetServiceOrderService';

interface ServiceInterface {
  id: string;
}

class DeleteServiceOrderService {
  async execute({ id }: ServiceInterface) {
    const serviceOrder = await getServiceOrderService.execute({ id });
    serviceOrdersRepository.delete(serviceOrder.id);
  }
}

export const deleteServiceOrderService = new DeleteServiceOrderService();
