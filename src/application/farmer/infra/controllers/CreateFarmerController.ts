import { Request, Response } from 'express';

import { createFarmerService } from '@application/farmer/services';

interface RequestInterface {
  name: string;
  nickname: string;
  gender: string;
  phone: string;
  cpf: string;
  address: string;
  marital_status: string;
  credit_line: string;
  course: string;
}

class CreateFarmerController {
  async handle(req: Request, res: Response) {
    const data = req.body as RequestInterface;
    const { familyId, propertyId } = req.params;

    const farmer = await createFarmerService.execute({
      ...data,
      familyId,
      propertyId,
    });

    res.status(201).json({ farmer });
  }
}

export const createFarmerController = new CreateFarmerController();
