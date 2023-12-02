export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  cpf: string;
  address?: string | null;
  formation: string;
  account_type: string;
  active: boolean;
  code: number | null;
  verified: boolean;
  createdAt: Date;
  updatedAt: Date;
}
