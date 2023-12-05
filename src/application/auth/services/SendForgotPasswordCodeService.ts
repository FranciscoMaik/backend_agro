import { NotFoundError } from '@infra/express/errors';

import { usersRepository } from '@application/user/infra/repositories';

import { Mailer } from '@libs';

import { createOtpService } from './CreateOtpService';

interface ServiceInterface {
  email: string;
}

class SendForgotPasswordCodeService {
  async execute({ email }: ServiceInterface) {
    const user = await usersRepository.findByEmail(email);

    if (!user) {
      throw new NotFoundError('user not found');
    }

    const code = await createOtpService.execute({
      email,
      type: 'forgot',
    });

    const mailer = new Mailer();

    await mailer.send({
      from: process.env.MAILER_EMAIL,
      to: user.email,
      subject: 'Recuperação de Senha',
      html: `
        <h1>olá, ${user.name}!</h1>
        <p>Para recuperar a sua senha, você deve informar o código abaixo e então poderá recuperar a sua conta.</p>
        <p>Aqui está o seu código para recuperar a sua senha:</p>
        <strong style="color: cyan; font-size: 18px; letter-spacing: 1.5px">${code}</strong>
        <br />
        <br />
        <div><small>*O código acima tem 5 minutos de expiração*</small></div>
        <br />
        <br />
        <br />
        <small>Caso você não tenha solicitado essa recuperação de senha, desconsidere esse e-mail.</small>
      `,
    });
  }
}

export const sendForgotPasswordCodeService =
  new SendForgotPasswordCodeService();
