import { NextFunction, Request, Response } from 'express';
import GetAllTagsService from '../service/GetAllTagsService';
export default class GetAllTagsController {
	async handle(req: Request, res: Response, next: NextFunction) {
		const getAllTagsService = new GetAllTagsService();

		const allTags = await getAllTagsService.execute();

		const teste = allTags.map(tag => console.log(tag))

		return res.status(200).send(JSON.stringify(allTags));
	}
}
