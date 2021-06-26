// por ser um repository customizado, é necessario usar o getCustomRepository
import { getCustomRepository } from 'typeorm';
import UsersRepositories from './../repositories/UsersRepositories';
// biblioteca de encriptação de dados
import { hash } from 'bcryptjs';

interface IUserRequest {
	name: string;
	email: string;
	password: string;
	admin: boolean;
}

export class CreateUserService {
	async execute({ name, email, password, admin = false }: IUserRequest) {
		const userRepository = getCustomRepository(UsersRepositories);

		if (!email) {
			throw new Error('Email is invalid');
		}

		const userAlreadyExists = await userRepository.findOne({ email });
		if (userAlreadyExists) {
			throw new Error('User already exists');
		}

		// criptografa os dados
		const passwordHash = await hash(password, 8);

		const User = userRepository.create({
			name,
			email,
			// password recebe o valor de passwordHash
			password: passwordHash,
			admin,
		});

		await userRepository.save(User);

		return User;
	}
}
