import { getCustomRepository } from 'typeorm';
import ComplimentsRepositories from '../repositories/ComplimentsRepositories';

export default class ListComplimentsReceivedService {
	async execute(user_id: string) {
		const complimentsRepository = getCustomRepository(
			ComplimentsRepositories
		);

		const compliments = await complimentsRepository.find({
			where: {
				user_receiver: user_id,
			},
			// traz junto com a busca, as informações das tabelas relacionadas
			relations: ['UserSender', 'UserReceiver', 'Tag'],
		});
		return compliments;
	}
}
