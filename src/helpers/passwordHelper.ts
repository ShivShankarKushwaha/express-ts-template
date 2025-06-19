import bcrypt from 'bcrypt';
import env from '../env';

export const generateSalt = async () => {
	const salt = await bcrypt.genSalt(env.SALT_ROUNDS);
	return salt;
};

export const hashPassword = async (password: string, salt: string) => {
	const hashedPassword = await bcrypt.hash(password, salt);
	return hashedPassword;
};

export const comparePassword = async (password: string, hashedPassword: string) => {
	const match = await bcrypt.compare(password, hashedPassword);
	return match;
};
