import { NextFunction, Request, Response } from 'express';
import GetAllUsersService from '../service/GetAllUsersService';
export default class GetAllUserController {
	async handle(req: Request, res: Response, next: NextFunction) {
		const getAllUser = new GetAllUsersService();

		const allUser = await getAllUser.execute();

		return res.status(200).send(JSON.stringify({ allUser }));
	}
}
