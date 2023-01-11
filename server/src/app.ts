import express from 'express';

import { config } from './config/environments';
import {logger} from './utils/logger';
import {loaders} from './loaders';

async function startServer() {
  const app = express();

  await loaders({ app });

  app.listen(config.port, () => {
    logger.info(`✅  Server is running on port ${config.port}`);
  });
}

startServer();