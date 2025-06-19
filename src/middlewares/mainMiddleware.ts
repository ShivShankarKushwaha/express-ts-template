import express, { Application } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { userAuthPayload } from '../types';
import { logger } from '../config';
import { limiter } from './express-rate-limit';

export const middleware = (app: Application) => {
	app.use(express.json({ limit: '10mb' }));
	app.use(cors());
	app.use(logger);
	app.use(cookieParser());
	app.use(limiter);
};

declare global {
	// eslint-disable-next-line @typescript-eslint/no-namespace
	namespace Express {
		interface Request {
			user: userAuthPayload | null;
		}
	}
}
