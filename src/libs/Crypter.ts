import bcrypt from 'bcrypt';

export class Crypter {
  public hash(value: string, salt = 8) {
    return bcrypt.hashSync(value, salt);
  }

  public async compare(value1: string, value2: string) {
    return bcrypt.compare(value1, value2);
  }
}
