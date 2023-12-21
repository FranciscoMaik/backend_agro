import { Request, Response } from 'express';

import { getAllFarmersService } from '@application/farmer/services';

class GetAllFarmersController {
  async handle(req: Request, res: Response) {
    const { propertyId, familyId } = req.params;

    const farmers = await getAllFarmersService.execute({
      propertyId,
      familyId,
    });

    res.status(200).json({ farmers });
  }
}

export const getAllFarmersController = new GetAllFarmersController();
