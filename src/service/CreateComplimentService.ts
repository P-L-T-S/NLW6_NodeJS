import { getCustomRepository } from 'typeorm';
import ComplimentsRepositories from '../repositories/ComplimentsRepositories';
import UsersRepositories from '../repositories/UsersRepositories';

interface IComplimentRequest {
	tag_id: string;
	user_sender: string;
	user_receiver: string;
	message: string;
}
export default class {
	async execute({
		tag_id,
		user_sender,
		user_receiver,
		message,
	}: IComplimentRequest) {
		const complimentRepositories = getCustomRepository(
			ComplimentsRepositories
		);
		const usersRepositories = getCustomRepository(UsersRepositories);

		if (user_receiver === user_sender) {
			throw new Error('Invalid user receiver');
		}

		const user_receiverExists = await usersRepositories.findOne(
			user_receiver
		);
		if (!user_receiverExists) {
			throw new Error('User receiver not found');
		}
		const user_senderExists = await usersRepositories.findOne(user_sender);

		if (!user_senderExists) {
			throw new Error('User sender not found');
		}

		const compliment = complimentRepositories.create({
			tag_id,
			user_sender,
			user_receiver,
			message,
		});
		await complimentRepositories.save(compliment);

		return compliment;
	}
}
