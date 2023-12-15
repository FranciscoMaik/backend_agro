import { Request, Response } from 'express';

import { createAgricuturalFamilyService } from '@application/agricuturalFamily/services';

interface RequestInterface {
  name: string;
  members_amount: number;
}

class CreateAgricuturalFamilyController {
  async handle(req: Request, res: Response) {
    const { propertyId } = req.params;
    const data = req.body as RequestInterface;

    const agricuturalFamily = await createAgricuturalFamilyService.execute({
      ...data,
      propertyId,
    });

    res.status(201).json({ agricuturalFamily });
  }
}

export const createAgricuturalFamilyController =
  new CreateAgricuturalFamilyController();
