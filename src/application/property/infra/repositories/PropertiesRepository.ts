import { prisma } from '@infra/database';

import { Property } from '@application/@shared/types/entities';
import { Create, Update } from '@application/@shared/types/helpers';

class PropertiesRepository {
  async findAll() {
    const properties = await prisma.property.findMany();
    return properties;
  }

  async findById(id: string) {
    const property = await prisma.property.findUnique({ where: { id } });
    return property;
  }

  async findByName(name: string) {
    const property = await prisma.property.findUnique({ where: { name } });
    return property;
  }

  async create(data: Create<Property>) {
    const property = await prisma.property.create({ data });
    return property;
  }
  async update(data: Update<Property>) {
    const property = await prisma.property.update({
      data,
      where: { id: data.id },
    });

    return property;
  }

  async delete(id: string) {
    await prisma.property.delete({ where: { id } });
  }
}

export const propertiesRepository = new PropertiesRepository();
