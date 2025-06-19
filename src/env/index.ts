import dotEnv from 'dotenv';
dotEnv.config();
const env = {
	PORT: process.env.PORT || 5500,
	MONGO_URI: process.env.MONGO_URI as string,
	APP_SECRET: process.env.APP_SECRET as string,
	SALT_ROUNDS: 10,
	REDIS_URL: process.env.REDIS_URL as string,
	NODE_ENV: (process.env.NODE_ENV as 'development' | 'production' | 'test') || 'development'
};

export default env;
