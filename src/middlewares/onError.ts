import { Request, Response, NextFunction } from 'express';

export default function onError(
	error: Error,
	req: Request,
	res: Response,
	next: NextFunction
) {
	if (error instanceof Error) {
		return res.status(400).send(JSON.stringify({ error: error.message }));
	}
	return res
		.status(500)
		.send(JSON.stringify({ error: 'Internal server error' }));
}
