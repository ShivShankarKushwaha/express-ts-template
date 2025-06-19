import { Request, Response } from 'express';
import { userLoginPayload, userSignupPayload } from '../types';
import { User } from '../models';
import { comparePassword, generateSalt, generateToken, hashPassword } from '../helpers';

const signup = async (req: Request, res: Response) => {
	const { error } = userSignupPayload.validate(req.body);
	if (error) {
		return res.status(400).json({ message: error.message });
	}
	const { name, email, password } = req.body;
	const existingUser = await User.findOne({ email });
	if (existingUser) {
		return res.status(400).json({ message: 'User already exists' });
	}
	const salt = await generateSalt();
	const hashedPassword = await hashPassword(password, salt);
	const user = new User({
		name,
		email,
		password: hashedPassword,
		salt,
		createdAt: new Date(),
		updatedAt: new Date()
	});
	const userCreated = await user.save();
	if (userCreated) {
		console.log('User Created', userCreated);
		const token = generateToken(userCreated.id);
		console.log('token', token);

		res.cookie('token', token);
		return res.status(200).json({ message: 'User Created' });
	}
	res.status(400).json({ message: 'User not Created' });
};

const login = async (req: Request, res: Response) => {
	const { error } = userLoginPayload.validate(req.body);
	if (error) {
		return res.status(400).json({ message: error.message });
	}
	const { email, password } = req.body;
	const user = await User.findOne({ email });
	if (user) {
		const match = await comparePassword(password, user.password);
		if (match) {
			res.cookie('token', generateToken(user.id));
			return res.status(200).json({ message: 'User Logged In' });
		}
	}
	res.status(400).json({ message: 'User not Logged In' });
};

const profile = async (req: Request, res: Response) => {
	const user = req.user;
	console.log('user', user);
	if (user) {
		// user.password = undefined;
		return res.status(200).json({ user });
	}
	res.status(401).json({ message: 'Unauthorized' });
};
export const UserController = { signup, login, profile };
