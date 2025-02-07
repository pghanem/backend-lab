import express, { Request, Response } from 'express';
import path from 'path';
import restApi from './pocs/http/rest-api';
import dotenv from 'dotenv';
import db from "./config/db";

// Load the .env file
dotenv.config();

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies of incoming requests
app.use(express.json());

// Mount the REST API POC at '/api/restApi'
app.use('/restApi', restApi);  // This means the REST POC route will be accessible under '/api/restApi'

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, '../public')));

// Default route to serve the index.html
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../public/index.html'));  // Serve the front-end HTML file
});

// Simple GET route to check the database connection
app.get('/api/test-db', (req: Request, res: Response) => {
	// TODO: test this out - the connection log in db.ts works but have yet to see this one
	db.query('SELECT NOW()', (err, results) => {
		if (err) {
			console.error('Database error:', err);
			return res.status(500).json({ message: 'Database error', error: err });
		}
		res.status(200).json({ message: 'Database connected!', currentTime: results });
	});
});

// Start the server and listen on the defined port
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});