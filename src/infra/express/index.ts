import 'express-async-errors';

import cors from 'cors';
import express, { json, Express } from 'express';

import { ExpressServerInterface } from '@infra/types';

export class ExpressServer implements ExpressServerInterface {
  private express: Express;
  private port: number;

  constructor(port: number) {
    this.express = express();
    this.port = port;

    this.config();
  }

  private config() {
    this.express.use(json());
    this.express.use(cors());
  }

  public start() {
    this.express.listen(this.port, () => console.log('Server started 🗿🍷'));
  }
}
