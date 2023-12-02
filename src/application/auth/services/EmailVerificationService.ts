import { UnauthorizedError } from '@infra/express/errors';

import { usersRepository } from '@application/user/infra/repositories';
import { getUserService } from '@application/user/services';

interface ServiceInterface {
  code: number;
  userId: string;
}

class EmailVerificationService {
  async execute({ code, userId }: ServiceInterface) {
    const user = await getUserService.execute({ id: userId });

    if (code !== user.code) {
      throw new UnauthorizedError('code is wrong');
    }

    await usersRepository.update({ ...user, verified: true });
  }
}

export const emailVerificationService = new EmailVerificationService();
