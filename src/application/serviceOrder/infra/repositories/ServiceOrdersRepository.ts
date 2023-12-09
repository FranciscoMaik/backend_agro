import { prisma } from '@infra/database';

import { ServiceOrder } from '@application/@shared/types/entities';
import { Create, Update } from '@application/@shared/types/helpers';

class ServiceOrdersRepository {
  async findAll(farmer_id: string, active: boolean) {
    const serviceOrders = await prisma.serviceOrder.findMany({
      where: { farmer_id, active },
    });

    return serviceOrders;
  }

  async findById(id: string, farmer_id: string) {
    const serviceOrder = await prisma.serviceOrder.findUnique({
      where: { farmer_id, id },
    });
    return serviceOrder;
  }

  async create(data: Create<ServiceOrder>) {
    const serviceOrder = await prisma.serviceOrder.create({ data });
    return serviceOrder;
  }

  async update(data: Update<ServiceOrder>) {
    const serviceOrder = await prisma.serviceOrder.update({
      data,
      where: { farmer_id: data.farmer_id, id: data.id },
    });

    return serviceOrder;
  }

  async delete(id: string, farmer_id: string) {
    await prisma.serviceOrder.delete({ where: { farmer_id, id } });
  }
}

export const serviceOrdersRepository = new ServiceOrdersRepository();
