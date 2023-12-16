import { Request, Response } from 'express';

import { updateLivestockActivityService } from '@application/livestockActivity/services';

interface RequestInterface {
  name: string;
  females_amount: number;
  males_amount: number;
  breed: string;
  size: string;
  production_system: string;
  power_supply: string;
  goal: string;
  hectares: number;
}

class UpdateLivestockActivityController {
  async handle(req: Request, res: Response) {
    const { id, propertyId } = req.params;
    const data = req.body as RequestInterface;

    const livestockActivity = await updateLivestockActivityService.execute({
      ...data,
      id,
      propertyId,
    });

    res.status(200).json({ livestockActivity });
  }
}

export const updateLivestockActivityController =
  new UpdateLivestockActivityController();
