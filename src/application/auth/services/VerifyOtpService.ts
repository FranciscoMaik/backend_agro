import { NotFoundError, UnauthorizedError } from '@infra/express/errors';

import { Crypter } from '@libs';

import { otpsRepository } from '../infra/repositories';

interface ServiceInterface {
  email: string;
  code: number;
  type: 'forgot' | 'email';
}

class VerifyOtpService {
  async execute({ email, code, type }: ServiceInterface) {
    const otp = await otpsRepository.findByUserEmailAndType(email, type);

    if (!otp) {
      throw new NotFoundError('code not found');
    }

    if (new Date() >= otp.expiresAt) {
      throw new UnauthorizedError('expired code');
    }

    const crypter = new Crypter();

    const isEqualCode = await crypter.compare(String(code), otp.otp);

    if (!isEqualCode) {
      throw new UnauthorizedError('code is wrong');
    }

    otpsRepository.delete(otp.id);
  }
}

export const verifyOtpService = new VerifyOtpService();
