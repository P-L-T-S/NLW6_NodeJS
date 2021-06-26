import { Request, Response, NextFunction } from 'express';

export default function addHeader(
	req: Request,
	res: Response,
	next: NextFunction
) {
	const header = {
		'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
		'Content-Type': 'application/json',
	};
	res.header(header);
	next();
}
