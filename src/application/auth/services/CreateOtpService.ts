import { NotFoundError } from '@infra/express/errors';

import { Otp } from '@application/@shared/types/entities';
import { addMinutes } from '@application/@shared/utils';
import { usersRepository } from '@application/user/infra/repositories';

import { Crypter } from '@libs';

import { otpsRepository } from '../infra/repositories';

interface ServiceInterface {
  email: string;
  type: 'forgot' | 'email';
}

class CreateOtpService {
  async execute({ email, type }: ServiceInterface) {
    const user = await usersRepository.findByEmail(email);

    if (!user) {
      throw new NotFoundError('user not found');
    }

    const otpExists = await otpsRepository.findByUserEmailAndType(email, type);

    if (otpExists) {
      await otpsRepository.delete(otpExists.id);
    }

    const crypter = new Crypter();

    const code = Math.round(Math.random() * 99999);

    const otp = crypter.hash(String(code));

    const data: Omit<Otp, 'id' | 'createdAt'> = {
      user_email: email,
      type,
      otp,
      expiresAt: addMinutes(5),
    };

    await otpsRepository.create(data);

    return code;
  }
}

export const createOtpService = new CreateOtpService();
