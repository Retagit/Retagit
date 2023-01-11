import HttpException from '../../utils/http.exception';
import { Router, Request, Response, NextFunction } from 'express';
import {logger} from '../../utils/logger';
import authenticated from '../../middleware/authenticated.middleware';

const route = Router();

export const user = (app: Router) => {
  app.use('/user', route);

  /**
   * @route GET /user/me
   */
  route.get('/', authenticated, (req: Request, res: Response, next: NextFunction) => {
      if(!req.user) {
        return next(new HttpException(401, 'Unauthorized'));
      }
      
      logger.info(req.user);
      return res.status(200).json({ user: req.user });
  });

};

