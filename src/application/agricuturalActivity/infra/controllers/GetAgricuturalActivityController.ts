import { Request, Response } from 'express';

import { getAgricuturalActivityService } from '@application/agricuturalActivity/services';

class GetAgricuturalActivityController {
  async handle(req: Request, res: Response) {
    const { id, propertyId } = req.params;

    const agricuturalActivity = await getAgricuturalActivityService.execute({
      id,
      propertyId,
    });

    res.status(200).json({ agricuturalActivity });
  }
}

export const getAgricuturalActivityController =
  new GetAgricuturalActivityController();
