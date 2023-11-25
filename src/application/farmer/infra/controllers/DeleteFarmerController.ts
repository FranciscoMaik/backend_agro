import { Request, Response } from 'express';

export class CreateFarmerController {
  handle(req: Request, res: Response) {
    const userId = req.userId;

    res.status(201).json({});
  }
}
