import { expressLoader } from './express.loader';
import { logger } from '../utils/logger';
import { Application } from 'express';
import { mongodbConnect } from './mongodb.loader';

export const loaders = async ({ app }: { app: Application }) => {
  // mongodb loader
  const mongoDb = await mongodbConnect();
  logger.info('✅  MongoDB connected');

  // express loader
  const express = await expressLoader({ app });
  logger.info('✅  Express loaded');
};
