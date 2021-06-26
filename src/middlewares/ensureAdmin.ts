import { Response, Request, NextFunction } from 'express';
import { getCustomRepository } from 'typeorm';
import UsersRepositories from '../repositories/UsersRepositories';

export default async function ensureAdmin(
	req: Request,
	res: Response,
	next: NextFunction
) {
	const { user_id } = req;
	// verifica se usuário é admin

	const usersRepositories = getCustomRepository(UsersRepositories);

	const user = await usersRepositories.findOne(user_id);

	if (user?.admin) {
		return next();
	}

	return res.status(401).send(JSON.stringify({ error: 'Unauthorized' }));
}
