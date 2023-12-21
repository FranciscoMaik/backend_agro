import { Request, Response } from 'express';

import { updateFarmerService } from '@application/farmer/services';

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

export class UpdateFarmerController {
  async handle(req: Request, res: Response) {
    const data = req.body as RequestInterface;
    const { id, propertyId, familyId } = req.params;

    const farmer = await updateFarmerService.execute({
      ...data,
      id,
      propertyId,
      familyId,
    });

    res.status(200).json({ farmer });
  }
}

export const updateFarmerController = new UpdateFarmerController();
