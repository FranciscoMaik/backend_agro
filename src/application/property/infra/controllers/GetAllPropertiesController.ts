import { Request, Response } from 'express';

import { getAllPropertiesService } from '@application/property/services';

class GetAllPropertiesController {
  async handle(req: Request, res: Response) {
    const properties = await getAllPropertiesService.execute();

    res.status(200).json({ properties });
  }
}

export const getAllPropertiesController = new GetAllPropertiesController();
