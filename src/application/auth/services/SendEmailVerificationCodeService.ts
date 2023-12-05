import { AlreadyExistError, NotFoundError } from '@infra/express/errors';

import { usersRepository } from '@application/user/infra/repositories';

import { Mailer } from '@libs';

import { createOtpService } from './CreateOtpService';

interface ServiceInterface {
  email: string;
}

class SendEmailVerificationCodeService {
  async execute({ email }: ServiceInterface) {
    const user = await usersRepository.findByEmail(email);

    if (!user) {
      throw new NotFoundError('user not found');
    }

    if (user.verified) {
      throw new AlreadyExistError('already verified user');
    }

    const code = await createOtpService.execute({
      email,
      type: 'email',
    });

    const mailer = new Mailer();

    await mailer.send({
      from: process.env.MAILER_EMAIL,
      to: user.email,
      subject: 'Verificação de E-mail',
      html: `
        <h1>Seja bem-vindo, ${user.name}!</h1>
        <p>Para que você possa ter uma boa experiência com o nosso serviço, precisamos verificar se o seu e-mail é válido.</p>
        <p>Aqui está o seu código para verificar o seu e-mail:</p>
        <strong style="color: cyan; font-size: 18px; letter-spacing: 1.5px">${code}</strong>
        <br />
        <br />
        <div><small>*O código acima tem 5 minutos de expiração*</small></div>
        <br />
        <br />
        <small>Caso você não tenha solicitado essa verificação, desconsidere esse e-mail.</small>
      `,
    });
  }
}

export const sendEmailVerificationCodeService =
  new SendEmailVerificationCodeService();
