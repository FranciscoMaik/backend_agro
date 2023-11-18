import dotenv from 'dotenv';

import { ExpressServer } from '@infra/express';

const server = async () => {
  dotenv.config();

  const httpPort = Number(process.env.PORT || 3001);
  const httpServer = new ExpressServer(httpPort);

  httpServer.start();
};

server();
