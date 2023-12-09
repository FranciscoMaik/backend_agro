import { NotFoundError } from '@infra/express/errors';

import { usersRepository } from '@application/user/infra/repositories';

import { Crypter } from '@libs';

import { verifyOtpService } from './VerifyOtpService';

interface ServiceInterface {
  code: number;
  email: string;
  newPassword: string;
}

class VerifyForgotPasswordCodeService {
  async execute({ code, email, newPassword }: ServiceInterface) {
    const user = await usersRepository.findByEmail(email);

    if (!user) {
      throw new NotFoundError('user not found');
    }

    const crypter = new Crypter();

    await verifyOtpService.execute({
      code,
      email,
      type: 'forgot',
    });

    await usersRepository.update({
      ...user,
      password: crypter.hash(newPassword),
    });
  }
}

export const verifyForgotPasswordCodeService =
  new VerifyForgotPasswordCodeService();
