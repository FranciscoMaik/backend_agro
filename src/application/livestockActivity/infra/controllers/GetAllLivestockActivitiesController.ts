import { Request, Response } from 'express';

import { getAllLivestockActivitiesService } from '@application/livestockActivity/services';

class GetAllLivestockActivitiesController {
  async handle(req: Request, res: Response) {
    const { propertyId } = req.params;

    const livestockActivities = await getAllLivestockActivitiesService.execute({
      propertyId,
    });

    res.status(200).json({ livestockActivities });
  }
}

export const getAllLivestockActivitiesController =
  new GetAllLivestockActivitiesController();
