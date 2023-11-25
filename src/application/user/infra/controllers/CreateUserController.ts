import { Request, Response } from 'express';

import { createUserService } from '@application/user/services';

interface RequestInterface {
  email: string;
  name: string;
  cpf: string;
  password: string;
  formation: string;
  address?: string | null;
}

export class CreateUserController {
  public async handle(req: Request, res: Response) {
    const data = req.body as RequestInterface;

    const user = await createUserService.execute(data);

    res.status(201).json({ user });
  }
}
