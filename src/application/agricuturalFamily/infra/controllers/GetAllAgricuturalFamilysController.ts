import { Request, Response } from 'express';

import { getAllAgricuturalFamilysService } from '@application/agricuturalFamily/services';

class GetAllAgricuturalFamilysController {
  async handle(req: Request, res: Response) {
    const { propertyId } = req.params;

    const agricuturalFamilys = await getAllAgricuturalFamilysService.execute({
      propertyId,
    });

    res.status(200).json({ agricuturalFamilys });
  }
}

export const getAllAgricuturalFamilysController =
  new GetAllAgricuturalFamilysController();
