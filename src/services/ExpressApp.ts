import { Application } from 'express';
import { mainRoute } from '../routes';
import { middleware } from '../middlewares';

export const App = (app: Application) => {
	middleware(app);

	app.get('/', (req, res) => {
		res.status(200).json({ message: 'Welcome to the API' });
	});

	app.use('/api', mainRoute);

	app.use('*', (req, res) => {
		res.status(404).json({ message: 'Not Found' });
	});
};
