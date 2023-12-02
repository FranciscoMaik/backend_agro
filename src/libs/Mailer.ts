import {
  createTransport,
  Transporter,
  SentMessageInfo,
  SendMailOptions,
} from 'nodemailer';

export class Mailer {
  private transport: Transporter<SentMessageInfo>;

  constructor() {
    this.transport = createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAILER_EMAIL,
        pass: process.env.MAILER_PASSWORD,
      },
    });
  }

  public async send(options: SendMailOptions) {
    await this.transport.sendMail(options);
  }
}
