import { Request, Response } from 'express';

import { createServiceOrderService } from '@application/serviceOrder/services';

interface RequestInterface {
  name: string;
  address: string;
  start_date: Date;
  end_date: Date;
}

class CreateServiceOrderController {
  async handle(req: Request, res: Response) {
    const { farmerId, familyId, propertyId } = req.params;
    const data = req.body as RequestInterface;

    const serviceOrder = await createServiceOrderService.execute({
      ...data,
      farmerId,
      familyId,
      propertyId,
    });

    res.status(201).json({ serviceOrder });
  }
}

export const createServiceOrderController = new CreateServiceOrderController();
