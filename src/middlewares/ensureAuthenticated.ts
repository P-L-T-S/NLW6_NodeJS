import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload {
	sub: string;
}

export default function ensureAuthenticated(
	req: Request,
	res: Response,
	next: NextFunction
) {
	const auth = req.headers.authorization;
	if (!auth) {
		return res
			.status(401)
			.send(JSON.stringify({ message: 'Incorrect token' }));
	}

	const [, token] = auth.split(' ');

	try {
		const { sub } = verify(
			token,
			'963bbce5ccfc68f34b2d932af07a80d1'
		) as IPayload;

		req.user_id = sub;
	} catch (error) {
		return res.status(401).send(JSON.stringify({ error: error.message }));
	}

	return next();
}
