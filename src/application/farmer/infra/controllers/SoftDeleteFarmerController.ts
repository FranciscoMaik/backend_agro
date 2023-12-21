import { Request, Response } from 'express';

import { softDeleteFarmerService } from '@application/farmer/services';

class SoftDeleteFarmerController {
  async handle(req: Request, res: Response) {
    const { id, propertyId, familyId } = req.params;

    await softDeleteFarmerService.execute({ id, propertyId, familyId });

    res.status(204).send();
  }
}

export const softDeleteFarmerController = new SoftDeleteFarmerController();
