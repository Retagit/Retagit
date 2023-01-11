import { NextFunction, Request, Response, Router } from 'express';
import HttpException from '../../utils/http.exception';
import UserService from '../../services/user.service';
import validationMiddleware from '../../middleware/validation.middleware';
import validate from '../../validation/user/user.validation';
import { logger } from '../../utils/logger';
import {verifyToken,  createToken} from '../../utils/token'
import jwt from 'jsonwebtoken';
const route = Router();


export const auth = (app: Router) => {
  app.use('/user/auth', route);
  const userService = new UserService()

  /**
   * @route POST /user/auth/signup
   */
  route.post(
    '/signup',
    validationMiddleware(validate.register),
    async (
      req: Request,
      res: Response,
      next: NextFunction
    ): Promise<Response | void > => {
      try {
        const { email, password, name } = req.body;
        const token = await userService.register(name, email, password, 'user');
        logger.info('User created successfully') 
        
        return res.status(201).json({ token });
      } catch (error: any) {
        next(new HttpException(400, error.message));
      }
    }
  );

  /**
   * @route POST /user/auth/signin
   */
  route.post('/signin', validationMiddleware(validate.login), 
    async (
      req: Request,
      res: Response,
      next: NextFunction
    ): Promise<Response | void > => {
      try {
        const { email, password } = req.body;
        const token = await userService.login(email, password);
        return res.status(200).json({ token });
      } catch (error: any) {
        next(new HttpException(400, 'Invalid credentials'));
      }
    }
    );

  /**
   * @route POST /user/auth/signout
   */
  route.delete('/signout');

  /**
   * @route POST /user/auth/refresh-token
   */
  route.post('/refresh-token');

  /**
   * @route POST /user/auth/verify-email
   */
  route.get('/verify-email/:token');

  /**
   * @route POST /user/auth/forgot-password
   */
  route.post('/forgot-password');

  /**
   * @route POST /user/auth/reset-password
   */
  route.put('/reset-password/:token');

  /**
   * @route POST /user/auth/change-password
   */
  route.put('/change-password');
};
