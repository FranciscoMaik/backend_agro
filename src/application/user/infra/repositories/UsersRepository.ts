import { prisma } from '@infra/database';

import { User } from '@application/@shared/types/entities';
import { Create, Update } from '@application/@shared/types/helpers';

class UsersRepository {
  async findById(id: string) {
    const user = await prisma.user.findUnique({ where: { id } });
    return user;
  }

  async findByEmail(email: string) {
    const user = await prisma.user.findUnique({ where: { email } });
    return user;
  }

  async findByCpf(cpf: string) {
    const user = await prisma.user.findUnique({ where: { cpf } });
    return user;
  }

  async create(data: Create<User>) {
    const user = await prisma.user.create({ data });
    return user;
  }

  async update(data: Update<User>) {
    const user = await prisma.user.update({ data, where: { id: data.id } });
    return user;
  }

  async delete(id: string) {
    await prisma.user.delete({ where: { id } });
  }
}

export const usersRepository = new UsersRepository();
