import { createClient, RedisClientType } from 'redis';
import env from '../env';

let client: RedisClientType;

export const initRedisClient = async () => {
	if (!client) {
		client = createClient({
			url: env.REDIS_URL,
			socket: {
				reconnectStrategy: (retryCount) => {
					if (retryCount > 3) {
						return false;
					}
					const delay = Math.min(retryCount * 500, 2000);
					return delay;
				}
			}
		});
		client.on('error', (err: any) => {
			console.log('Error creating redis client' + err);
		});
	}
	try {
		await client.connect();
		console.log('Redis client connected');
	} catch (error) {
		console.log('Error on redis initialization ' + error);
		throw new Error('Error on redis initialization');
	}
	return client;
};

export const getRedisValue = async (key: string) => {
	try {
		const value = await client.json.get(`user:${key}`);
		return value;
	} catch (error) {
		console.log('Error on get redis value ' + error);
		return null;
	}
};

export const setRedisValue = async (key: string, value: any, ttl: number = 300) => {
	try {
		const redisKey = `user:${key}`;
		await client.json.set(redisKey, '$', value);
		await client.expire(redisKey, ttl);
	} catch (error) {
		console.error('Error on set redis value:', error);
		return null;
	}
};
