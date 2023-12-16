import { prisma } from '@infra/database';

import { LivestockActivity } from '@application/@shared/types/entities/LivestockActivity';
import { Create, Update } from '@application/@shared/types/helpers';

class LivestockActivitiesRepository {
  async findAll(property_id: string) {
    const livestockActivities = await prisma.livestockActivity.findMany({
      where: { property_id },
    });
    return livestockActivities;
  }

  async findById(id: string, property_id: string) {
    const livestockActivity = await prisma.livestockActivity.findUnique({
      where: { id, property_id },
    });
    return livestockActivity;
  }

  async create(data: Create<LivestockActivity>) {
    const livestockActivity = await prisma.livestockActivity.create({ data });
    return livestockActivity;
  }

  async update(data: Update<LivestockActivity>) {
    const livestockActivity = await prisma.livestockActivity.update({
      data,
      where: { id: data.id, property_id: data.property_id },
    });

    return livestockActivity;
  }

  async delete(id: string, property_id: string) {
    await prisma.livestockActivity.delete({ where: { id, property_id } });
  }
}

export default new LivestockActivitiesRepository();
