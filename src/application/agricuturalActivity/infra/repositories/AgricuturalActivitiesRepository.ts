import { prisma } from '@infra/database';

import { AgricuturalActivity } from '@application/@shared/types/entities';
import { Create, Update } from '@application/@shared/types/helpers';

class LivestockActivitiesRepository {
  async findAll(property_id: string) {
    const agricuturalActivities = await prisma.agricuturalActivity.findMany({
      where: { property_id },
    });
    return agricuturalActivities;
  }

  async findById(id: string, property_id: string) {
    const agricuturalActivity = await prisma.agricuturalActivity.findUnique({
      where: { id, property_id },
    });
    return agricuturalActivity;
  }

  async create(data: Create<AgricuturalActivity>) {
    const agricuturalActivity = await prisma.agricuturalActivity.create({
      data,
    });
    return agricuturalActivity;
  }

  async update(data: Update<AgricuturalActivity>) {
    const agricuturalActivity = await prisma.agricuturalActivity.update({
      data,
      where: { id: data.id, property_id: data.property_id },
    });
    return agricuturalActivity;
  }

  async delete(id: string, property_id: string) {
    await prisma.agricuturalActivity.delete({ where: { id, property_id } });
  }
}

export default new LivestockActivitiesRepository();
