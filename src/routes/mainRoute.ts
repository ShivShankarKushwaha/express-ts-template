import { Router } from 'express';
import { SimpleRoute } from './SimpleRoute';
import { UserRoute } from './UserRoute';

export const mainRoute = Router();

mainRoute.use('/simple', SimpleRoute);
mainRoute.use('/user', UserRoute);
