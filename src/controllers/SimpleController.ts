import { Request, Response } from 'express';
import { getRedisValue, setRedisValue } from '../config';

const home = async (req: Request, res: Response) => {
	let respData = await getRedisValue('home');
	if (respData) {
		return res.status(200).json({ message: respData });
	}
	respData = 'Hello World';
	res.status(200).json({ message: respData });
	await setRedisValue('home', respData);
};

export const simpleController = { home };
