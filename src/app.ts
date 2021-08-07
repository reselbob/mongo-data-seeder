// Import the express with express name
import express from 'express';

const app: express.Application = express();

// Define the port for the application is run
const port: number = 3000;

app.use(express.json());

// Handle '/', path of the api.
app.get('/', (_req, _res): void => {
	_res.json({
		'name': 'typescript_api',
		'path': '/',
		'work': 'search_other_apis'
	});
});


// Server the api endpints.
app.listen(port, (): void => {
	console.log(`Typescript API server http://localhost:${port}/`);
});
