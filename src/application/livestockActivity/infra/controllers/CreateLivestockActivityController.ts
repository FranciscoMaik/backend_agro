import { Request, Response } from 'express';

import { createLivestockActivityService } from '@application/livestockActivity/services';

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

class CreateLivestockActivityController {
  async handle(req: Request, res: Response) {
    const { propertyId } = req.params;
    const data = req.body as RequestInterface;

    const livestockActivity = await createLivestockActivityService.execute({
      ...data,
      propertyId,
    });

    res.status(201).json({ livestockActivity });
  }
}

export const createLivestockActivityController =
  new CreateLivestockActivityController();
