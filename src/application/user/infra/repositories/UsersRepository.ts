import { prisma } from '@infra/database';

import { User } from '@shared/types';

class UsersRepository {
  async findById(id: string) {
    const user = await prisma.user.findFirst({ where: { id } });
    return user;
  }

  async findByEmail(email: string) {
    const user = await prisma.user.findFirst({ where: { email } });
    return user;
  }

  async findByCpf(cpf: string) {
    const user = await prisma.user.findFirst({ where: { cpf } });
    return user;
  }

  async create(data: Omit<User, 'id' | 'createdAt' | 'updatedAt'>) {
    const user = await prisma.user.create({ data });
    return user;
  }

  async update(data: User) {
    const user = await prisma.user.update({ data, where: { id: data.id } });
    return user;
  }

  async delete(id: string) {
    await prisma.user.delete({ where: { id } });
  }
}

export const usersRepository = new UsersRepository();
