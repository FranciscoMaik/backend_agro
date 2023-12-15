import { Request, Response } from 'express';

import { getAgricuturalFamilyService } from '@application/agricuturalFamily/services';

class GetAgricuturalFamilyController {
  async handle(req: Request, res: Response) {
    const { propertyId, id } = req.params;

    const agricuturalFamily = await getAgricuturalFamilyService.execute({
      id,
      propertyId,
    });

    res.status(200).json({ agricuturalFamily });
  }
}

export const getAgricuturalFamilyController =
  new GetAgricuturalFamilyController();
