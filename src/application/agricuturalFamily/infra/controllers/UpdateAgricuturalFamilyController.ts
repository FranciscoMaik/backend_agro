import { Request, Response } from 'express';

import { updateAgricuturalFamilyService } from '@application/agricuturalFamily/services';

interface RequestInterface {
  name: string;
  members_amount: number;
}

class UpdateAgricuturalFamilyController {
  async handle(req: Request, res: Response) {
    const { id, propertyId } = req.params;
    const data = req.body as RequestInterface;

    const agricuturalFamily = await updateAgricuturalFamilyService.execute({
      ...data,
      id,
      propertyId,
    });

    res.status(200).json({ agricuturalFamily });
  }
}

export const updateAgricuturalFamilyController =
  new UpdateAgricuturalFamilyController();
