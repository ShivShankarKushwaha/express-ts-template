import express from 'express';
import { App } from './services';
import { dbConnect, initRedisClient } from './config';
import env from './env';

async function startServer() {
	const app = express();
	App(app);
	await dbConnect();
	await initRedisClient();
	app.listen(env.PORT, () => {
		console.log(`Server running on port ${env.PORT}`);
	});
}

startServer();
