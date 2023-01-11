import { Router } from 'express';
import { auth, user } from './user/';

export default () => {
  const app = Router();
  auth(app);
  user(app);

  return app;
};