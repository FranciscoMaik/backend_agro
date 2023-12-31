import { User } from '../types/entities';

export const userMapper = ({
  id,
  name,
  email,
  cpf,
  address,
  formation,
  account_type,
  active,
  verified,
  createdAt,
  updatedAt,
}: User): Omit<User, 'password' | 'code'> => ({
  id,
  name,
  email,
  cpf,
  address,
  formation,
  account_type,
  active,
  verified,
  createdAt,
  updatedAt,
});
