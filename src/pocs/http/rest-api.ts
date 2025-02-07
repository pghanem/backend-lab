import { Router, Request, Response } from 'express';

const router = Router();

// Example routes for a simple REST API
router.get('/restGet', (req: Request, res: Response) => {
	res.status(200).json({
		message: 'Successful GET request!',
	});
});

router.post('/restPost', (req: Request, res: Response) => {
	res.status(200).json({
		message: 'Successful POST request!',
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
