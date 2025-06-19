import Jwt from 'jsonwebtoken';
import env from '../env';
import { NextFunction, Request, Response } from 'express';
import { User } from '../models';

export const generateToken = (payload: string) => {
	console.log('payload', payload);
	const token = Jwt.sign(payload, env.APP_SECRET);
	return token;
};

export const verifyToken = (token: string) => {
	const payload = Jwt.verify(token, env.APP_SECRET);
	return payload;
};

export const AuthenticateUser = async (req: Request, res: Response, next: NextFunction) => {
	const token = req.cookies['token'];
	if (token) {
		const payload = verifyToken(token);
		if (payload) {
			const user = await User.findById(payload);
			if (user) {
				req.user = { _id: user.id, name: user.name, email: user.email };
				next();
			} else {
				res.status(404).json({ message: 'User not found' });
			}
		} else {
			req.user = null;
			res.status(401).json({ message: 'Unauthorized' });
		}
	} else {
		res.status(401).json({ message: 'Unauthorized' });
	}
};
