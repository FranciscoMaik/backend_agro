import { Request, Response } from 'express';

import { getFarmerService } from '@application/farmer/services';
class GetFarmerController {
  async handle(req: Request, res: Response) {
    const { id, propertyId, familyId } = req.params;

    const farmer = await getFarmerService.execute({ id, propertyId, familyId });

    res.status(200).json({ farmer });
  }
}

export const getFarmerController = new GetFarmerController();
