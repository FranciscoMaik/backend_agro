import { Request, Response } from 'express';

import { softDeleteFarmerService } from '@application/farmer/services';

class SoftDeleteFarmerController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    await softDeleteFarmerService.execute({ id });

    res.status(204).send();
  }
}

export const softDeleteFarmerController = new SoftDeleteFarmerController();
