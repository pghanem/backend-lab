import { Router, Request, Response } from 'express';
import db from "../../config/db";

const router = Router();

router.get('/restGet/:id', (req: Request, res: Response) => {
	const userId = req.params.id;

	const sql = "SELECT * FROM users WHERE id = ?"

	db.query(sql, [userId], (err, results: any[]) => {
		if (err) {
			console.error('Database error:', err);
			return res.status(500).json({ message: 'Database error', error: err });
		}
		if (results.length === 0) {
			return res.status(404).json({ message: 'User not found' });
		}
		res.status(200).json({ message: 'User retrieved successfully', user: results[0] });
	});
});

router.post('/restPost', (req: Request, res: Response) => {
	const { first_name, last_name, email } = req.body;

	const sql = "INSERT INTO users (first_name, last_name, email) VALUES (?, ?, ?)";

	db.query(sql, [first_name, last_name, email], (err, result) => {
		if (err) return res.status(500).json({ error: err });
		res.status(201).json({ message: 'User created' });
	});
});

router.put('/restPut', (req: Request, res: Response) => {
	res.status(200).json({
		message: 'Successful PUT request!',
	});
});

router.delete('/restDelete', (req: Request, res: Response) => {
	res.status(200).json({
		message: 'Successful DELETE request!',
	});
});



export default router;
