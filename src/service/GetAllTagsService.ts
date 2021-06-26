import { getCustomRepository } from 'typeorm';
import TagsRepositories from '../repositories/TagsRepositories';

export default class GetAllTagsService {
	async execute() {
		const tagsRepository = getCustomRepository(TagsRepositories);

		const allTags = await tagsRepository.find();

		return allTags;
	}
}
