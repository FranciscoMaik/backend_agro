import { AlreadyExistError, NotFoundError } from '@infra/express/errors';

import { usersRepository } from '@application/user/infra/repositories';

import { verifyOtpService } from './VerifyOtpService';

interface ServiceInterface {
  code: number;
  email: string;
}

class VerifyEmailVerificationCodeService {
  async execute({ code, email }: ServiceInterface) {
    const user = await usersRepository.findByEmail(email);

    if (!user) {
      throw new NotFoundError('user not found');
    }

    if (user.verified) {
      throw new AlreadyExistError('already verified user');
    }

    await verifyOtpService.execute({
      code,
      email,
      type: 'email',
    });

    await usersRepository.update({ ...user, verified: true });
  }
}

export const verifyEmailVerificationCodeService =
  new VerifyEmailVerificationCodeService();
