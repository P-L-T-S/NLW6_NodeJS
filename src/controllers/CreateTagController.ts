import { Request, Response } from 'express';
import CreateTagService from '../service/CreateTagService';

export default class CreatTagController {
	async handle(req: Request, res: Response) {
		const { name } = req.body;

		const createTagService = new CreateTagService();

		const tag = await createTagService.execute(name);

		return res.status(201).send(JSON.stringify(tag));
	}
}
