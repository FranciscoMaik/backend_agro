import { Request, Response } from 'express';

import { getAllAgricuturalActivitiesService } from '@application/agricuturalActivity/services';

class GetAllAgricuturalActivitiesController {
  async handle(req: Request, res: Response) {
    const { propertyId } = req.params;

    const agricuturalActivity =
      await getAllAgricuturalActivitiesService.execute({
        propertyId,
      });

    res.status(200).json({ agricuturalActivity });
  }
}

export const getAllAgricuturalActivitiesController =
  new GetAllAgricuturalActivitiesController();
