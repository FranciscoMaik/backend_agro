import jwt from 'jsonwebtoken';

import { ServerError } from '@infra/express/errors';

type Payload = string | object | Buffer;

export class Token {
  private readonly SECURITY_KEY: string;

  constructor(SECURITY_KEY: string | undefined) {
    if (!SECURITY_KEY) {
      throw new ServerError('SECURITY_KEY not found');
    }

    this.SECURITY_KEY = SECURITY_KEY;
  }

  public create(payload: Payload, options?: jwt.SignOptions) {
    return jwt.sign(payload, this.SECURITY_KEY, options);
  }

  public read(token: string) {
    return token.replace('Bearer', '').trim();
  }

  public verify(token: string) {
    return jwt.verify(token, this.SECURITY_KEY);
  }
}
