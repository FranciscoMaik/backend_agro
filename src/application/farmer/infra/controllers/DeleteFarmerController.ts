import { Request, Response } from 'express';

import { deleteFarmerService } from '@application/farmer/services';

class DeleteFarmerController {
  async handle(req: Request, res: Response) {
    const { id, propertyId, familyId } = req.params;

    await deleteFarmerService.execute({ id, propertyId, familyId });

    res.status(204).send();
  }
}

export const deleteFarmerController = new DeleteFarmerController();
