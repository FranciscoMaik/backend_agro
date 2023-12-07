import { Request, Response } from 'express';

import { getAllServiceOrdersService } from '@application/serviceOrder/services';

interface Query {
  active: string;
}

class GetAllServiceOrdersController {
  async handle(req: Request, res: Response) {
    const { farmerId } = req.params;
    const { active } = req.query as unknown as Query;

    const serviceOrders = await getAllServiceOrdersService.execute({
      farmerId,
      active: Boolean(active) ?? true,
    });

    res.status(200).json({ serviceOrders });
  }
}

export const getAllServiceOrdersController =
  new GetAllServiceOrdersController();
