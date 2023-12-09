export interface Otp {
  id: string;
  user_email: string;
  otp: string;
  type: 'forgot' | 'email';
  expiresAt: Date;
  createdAt: Date;
}
