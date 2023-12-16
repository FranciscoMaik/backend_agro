import { Request, Response } from 'express';

import { createAgricuturalActivityService } from '@application/agricuturalActivity/services';

interface RequestInterface {
  name: string;
  uses_irrigation: boolean;
  uses_pesticides: boolean;
  cultivation: string;
  input: string;
  hectares: number;
  work_method: string;
  used_equipament: string;
}

class CreateAgricuturalActivityController {
  async handle(req: Request, res: Response) {
    const { propertyId } = req.params;
    const data = req.body as RequestInterface;

    const agricuturalActivity = await createAgricuturalActivityService.execute({
      ...data,
      propertyId,
    });

    res.status(201).json({ agricuturalActivity });
  }
}

export const createAgricuturalActivityController =
  new CreateAgricuturalActivityController();
