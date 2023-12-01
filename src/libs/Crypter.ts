import bcrypt from 'bcrypt';

export class Crypter {
  public hash(value: string, salt = 8) {
    return bcrypt.hashSync(value, salt);
  }

  public async compare(value: string, hash: string) {
    return bcrypt.compare(value, hash);
  }
}
