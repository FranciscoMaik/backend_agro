import { prisma } from '@infra/database';

import { ServiceOrder } from '@application/@shared/types';

class ServiceOrdersRepository {
  async findAll(farmer_id: string, active: boolean) {
    const serviceOrders = await prisma.serviceOrder.findMany({
      where: { farmer_id, active },
    });

    return serviceOrders;
  }

  async findById(id: string) {
    const serviceOrder = await prisma.serviceOrder.findUnique({
      where: { id },
    });
    return serviceOrder;
  }

  async create(data: Omit<ServiceOrder, 'id' | 'createdAt' | 'updatedAt'>) {
    const serviceOrder = await prisma.serviceOrder.create({ data });
    return serviceOrder;
  }

  async update(data: ServiceOrder) {
    const serviceOrder = await prisma.serviceOrder.update({
      data,
      where: { id: data.id },
    });

    return serviceOrder;
  }

  async delete(id: string) {
    await prisma.serviceOrder.delete({ where: { id } });
  }
}

export const serviceOrdersRepository = new ServiceOrdersRepository();
