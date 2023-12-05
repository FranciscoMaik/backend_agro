export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  cpf: string;
  address?: string | null;
  formation: string;
  account_type: 'user' | 'adm';
  active: boolean;
  verified: boolean;
  createdAt: Date;
  updatedAt: Date;
}
