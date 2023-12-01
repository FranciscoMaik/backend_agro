import { Request, Response } from 'express';

import { getFarmerService } from '@application/farmer/services';
class GetFarmerController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const farmer = await getFarmerService.execute({ id });

    res.status(200).json({ farmer });
  }
}

export const getFarmerController = new GetFarmerController();
