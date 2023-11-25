import { prisma } from '@infra/database';

import { Farmer } from '@application/commons/types';

class FarmersRepository {
  async findAll(user_id: string) {
    const farmers = await prisma.farmer.findMany({ where: { user_id } });
    return farmers;
  }

  async findById(id: string) {
    const farmer = await prisma.farmer.findUnique({ where: { id } });
    return farmer;
  }

  async create(data: Omit<Farmer, 'id' | 'createdAt' | 'updatedAt'>) {
    const farmer = await prisma.farmer.create({ data });
    return farmer;
  }

  async update(data: Farmer) {
    const farmer = await prisma.farmer.update({ data, where: { id: data.id } });
    return farmer;
  }

  async delete(id: string) {
    await prisma.farmer.delete({ where: { id } });
  }

  async deleteAll(user_id: string) {
    await prisma.farmer.deleteMany({ where: { user_id } });
  }
}

export default new FarmersRepository();