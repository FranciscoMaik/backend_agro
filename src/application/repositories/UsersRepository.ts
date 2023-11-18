import { User } from '@prisma/client';

import { prisma } from '@infra/database';

import { RepositoryInterface } from '@application/types';

class UsersRepository implements Omit<RepositoryInterface<User>, 'findAll'> {
  async findOne(id: string) {
    const user = await prisma.user.findFirst({ where: { id } });
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
    prisma.user.delete({ where: { id } });
  }
}

export default new UsersRepository();
