import { prisma } from '@infra/database';

import { AgricuturalFamily } from '@application/@shared/types/entities';
import { Create, Update } from '@application/@shared/types/helpers';

class AgricuturalFamilysRepository {
  async findAll(property_id: string) {
    const agricuturalFamilys = await prisma.agricuturalFamily.findMany({
      where: { property_id },
    });
    return agricuturalFamilys;
  }

  async findById(id: string, property_id: string) {
    const agricuturalFamily = await prisma.agricuturalFamily.findUnique({
      where: { property_id, id },
    });
    return agricuturalFamily;
  }

  async findByName(name: string) {
    const agricuturalFamily = await prisma.agricuturalFamily.findUnique({
      where: { name },
    });
    return agricuturalFamily;
  }

  async create(data: Create<AgricuturalFamily>) {
    const agricuturalFamily = await prisma.agricuturalFamily.create({ data });
    return agricuturalFamily;
  }

  async update(data: Update<AgricuturalFamily>) {
    const agricuturalFamily = await prisma.agricuturalFamily.update({
      data,
      where: { id: data.id },
    });
    return agricuturalFamily;
  }

  async delete(id: string, property_id: string) {
    await prisma.agricuturalFamily.delete({ where: { property_id, id } });
  }
}

export default new AgricuturalFamilysRepository();
