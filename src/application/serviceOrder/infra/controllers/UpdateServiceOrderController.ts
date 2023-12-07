import { Request, Response } from 'express';

import { updateServiceOrderService } from '@application/serviceOrder/services';

interface RequestInterface {
  name: string;
  address: string;
  start_date: Date;
  end_date: Date;
  active: boolean;
}

class UpdateServiceOrderController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const data = req.body as RequestInterface;

    const serviceOrder = await updateServiceOrderService.execute({
      ...data,
      id,
    });

    res.status(200).json({ serviceOrder });
  }
}

export const updateServiceOrderController = new UpdateServiceOrderController();
