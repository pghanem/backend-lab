import { Router, Request, Response } from 'express';

const router = Router();

// Example route for the simple REST API
router.get('/restGet', (req: Request, res: Response) => {
	res.status(200).json({
		message: 'This is your first REST API get request!',
	});
});

export default router;
