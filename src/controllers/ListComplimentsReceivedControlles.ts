import { Request, Response, NextFunction } from 'express';
import ListComplimentsReceivedService from '../service/ListComplimentsReceivedService';

export default class ListComplimentsReceivedControlles {
	async handle(req: Request, res: Response, next: NextFunction) {
		const listComplimentsReceivedService =
			new ListComplimentsReceivedService();

		const { user_id } = req.body;

		const listCompliments = await listComplimentsReceivedService.execute(
			user_id
		);

		return res.status(200).send(JSON.stringify(listCompliments));
	}
}
