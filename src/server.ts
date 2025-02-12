import express, { Request, Response } from 'express';
import path from 'path';
import restApi from './pocs/http/rest-api';
import dotenv from 'dotenv';
import db from "./config/db";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/restApi', restApi);

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/api/test-db', (req: Request, res: Response) => {
	db.query('SELECT NOW()', (err, results) => {
		if (err) {
			console.error('Database error:', err);
			return res.status(500).json({ message: 'Database error', error: err });
		}
		res.status(200).json({ message: 'Database connected!', currentTime: results });
	});
});

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});