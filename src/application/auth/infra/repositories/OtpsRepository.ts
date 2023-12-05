import { prisma } from '@infra/database';

import { Otp } from '@application/@shared/types';

class OtpsRepository {
  async findByUserEmailAndType(user_email: string, type: Otp['type']) {
    const otp = await prisma.otp.findFirst({ where: { user_email, type } });
    return otp;
  }

  async create(data: Omit<Otp, 'createdAt' | 'id'>) {
    const otp = await prisma.otp.create({ data });
    return otp;
  }

  async delete(id: string) {
    await prisma.otp.delete({ where: { id } });
  }
}

export const otpsRepository = new OtpsRepository();
