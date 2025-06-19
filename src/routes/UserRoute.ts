import { Router } from 'express';
import { UserController } from '../controllers';
import { AuthenticateUser } from '../helpers';
import { loginLimiter } from '../middlewares';

export const UserRoute = Router();
UserRoute.post('/signup', UserController.signup);
UserRoute.post('/login', loginLimiter, UserController.login);

UserRoute.use(AuthenticateUser);
UserRoute.get('/profile', UserController.profile);
