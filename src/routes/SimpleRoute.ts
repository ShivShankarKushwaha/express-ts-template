import { Router } from 'express';
import { simpleController } from '../controllers';

export const SimpleRoute = Router();

SimpleRoute.get('/', simpleController.home);
