import mongoose from 'mongoose';
import env from '../env';

export const dbConnect = async () => {
	mongoose
		.connect(env.MONGO_URI as string)
		.then(() => console.log('MongoDB connected'))
		.catch((err) => console.log('database not connected', err));
};
