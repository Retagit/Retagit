import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
//import helmet from 'helmet';
import { logger } from '../utils/logger';
import errorMiddleware from '../middleware/error.middleware';
import morgan from 'morgan';
// import { errorHandler } from '../middlewares/error.middleware';

import routes from '../routes';

const app = express();

export const expressLoader = async ({ app }: { app: express.Application }) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  //app.use(helmet());
  app.use(morgan('dev'));

  /**
   * Routes
   */
  app.use('/api', routes());

  /**
   * 404 Handler
   */
  app.use(( req: Request, res: Response, next: NextFunction) => {
    const err = new Error('page not found');
    logger.warn(err.message)
    res.status(404).json({ status: 404, message: 'page not found' });
    //next(err);
  });

  app.use(errorMiddleware);

};

export default app;
