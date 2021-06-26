import { NextFunction, Request, Response } from 'express';
import ListComplimentsSendedService from '../service/ListComplientsSendedService';

export default class ListComplimentsSendedController {
	async handle(req: Request, res: Response, next: NextFunction) {
		const listComplimentsSendedService = new ListComplimentsSendedService();

		const { user_id } = req.body;

		const listCompliments = await listComplimentsSendedService.execute(
			user_id
		);

		return res.status(200).send(JSON.stringify(listCompliments));
	}
}
