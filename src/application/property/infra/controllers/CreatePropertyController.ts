import { Request, Response } from 'express';

import { createPropertyService } from '@application/property/services';

interface RequestInterface {
  name: string;
  hectares: number;
  address: string;
  exploration: string;
  classification: string;
  hydric_source: string;
  electrical_source: string;
}

class CreatePropertyController {
  async handle(req: Request, res: Response) {
    const data = req.body as RequestInterface;

    const property = await createPropertyService.execute(data);

    res.status(201).json({ property });
  }
}

export const createPropertyController = new CreatePropertyController();
