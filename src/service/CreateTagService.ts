import { getCustomRepository } from 'typeorm';
import TagsRepositories from '../repositories/TagsRepositories';

export default class CreateTagService {
	async execute(name: string) {
		const tagRepository = getCustomRepository(TagsRepositories);

		if (!name) {
			throw new Error('Tag name is invalid');
		}

		// SELECT * FROM TAGS WHERE NAME = name
		const nameAlreadyExists = await tagRepository.findOne({ name });

		if (nameAlreadyExists) {
			throw new Error('Tag already exists');
		}

		const Tag = tagRepository.create({ name });

		await tagRepository.save(Tag);

		return Tag;
	}
}
