import { prisma } from '@infra/database';

import { Farmer } from '@application/@shared/types/entities';
import { Create, Update } from '@application/@shared/types/helpers';

class FarmersRepository {
  async findAll(family_id: string) {
    const farmers = await prisma.farmer.findMany({ where: { family_id } });
    return farmers;
  }

  async findById(id: string, family_id: string) {
    const farmer = await prisma.farmer.findUnique({ where: { id, family_id } });
    return farmer;
  }

  async findByPhone(phone: string) {
    const farmer = await prisma.farmer.findUnique({ where: { phone } });
    return farmer;
  }

  async findByCpf(cpf: string) {
    const farmer = await prisma.farmer.findUnique({ where: { cpf } });
    return farmer;
  }

  async create(data: Create<Farmer>) {
    const farmer = await prisma.farmer.create({ data });
    return farmer;
  }

  async update(data: Update<Farmer>) {
    const farmer = await prisma.farmer.update({
      data,
      where: { id: data.id, family_id: data.family_id },
    });

    return farmer;
  }

  async delete(id: string, family_id: string) {
    await prisma.farmer.delete({ where: { id, family_id } });
  }
}

export default new FarmersRepository();
