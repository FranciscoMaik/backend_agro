import { Request, Response } from 'express';

import { getAllFarmersService } from '@application/farmer/services';

class GetAllFarmersController {
  async handle(req: Request, res: Response) {
    const userId = req.userId;

    const farmers = await getAllFarmersService.execute({ userId });

    res.status(200).json({ farmers });
  }
}

export const getAllFarmersController = new GetAllFarmersController();
