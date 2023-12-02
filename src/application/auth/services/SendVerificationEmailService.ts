import { NotFoundError } from '@infra/express/errors';

import { usersRepository } from '@application/user/infra/repositories';

import { Mailer } from '@libs';

interface ServiceInterface {
  email: string;
}

class SendVerificationEmailService {
  async execute({ email }: ServiceInterface) {
    const user = await usersRepository.findByEmail(email);

    if (!user) {
      throw new NotFoundError('user not found');
    }

    const mailer = new Mailer();

    const code = Math.round(Math.random() * 999999);

    await usersRepository.update({ ...user, code });

    await mailer.send({
      from: 'agro@gmail.com',
      to: user.email,
      subject: 'Verificação de E-mail',
      html: `
        <h1>Seja bem-vindo, ${user.name}!</h1>
        <p>Para que você possa ter uma boa experiência com o nosso serviço, precisamos verificar se o seu e-mail é válido.</p>
        <p>Aqui está o seu código para verificar o seu e-mail:</p>
        <strong>${code}</strong>
        <br />
        <br />
        <br />
        <small>Caso você não tenha solicitado essa verificação, desconsidere esse e-mail.</small>
      `,
    });
  }
}

export const sendVerificationEmailService = new SendVerificationEmailService();
