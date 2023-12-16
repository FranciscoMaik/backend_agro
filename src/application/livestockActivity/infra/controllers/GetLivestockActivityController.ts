import { Request, Response } from 'express';

import { getLivestockActivityService } from '@application/livestockActivity/services';

class GetLivestockActivityController {
  async handle(req: Request, res: Response) {
    const { id, propertyId } = req.params;

    const livestockActivity = await getLivestockActivityService.execute({
      id,
      propertyId,
    });

    res.status(200).json({ livestockActivity });
  }
}

export const getLivestockActivityController =
  new GetLivestockActivityController();
