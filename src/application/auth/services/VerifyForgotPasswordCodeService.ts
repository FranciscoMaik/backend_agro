import { NotFoundError } from '@infra/express/errors';

import { usersRepository } from '@application/user/infra/repositories';

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

    await verifyOtpService.execute({
      code,
      email,
      type: 'forgot',
    });

    await usersRepository.update({ ...user, password: newPassword });
  }
}

export const verifyForgotPasswordCodeService =
  new VerifyForgotPasswordCodeService();
