import { Request, Response } from 'express';

import { deleteFarmerService } from '@application/farmer/services';

class DeleteFarmerController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    await deleteFarmerService.execute({ id });

    res.status(204).send();
  }
}

export const deleteFarmerController = new DeleteFarmerController();
