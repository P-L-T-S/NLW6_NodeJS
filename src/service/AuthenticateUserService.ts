import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { getCustomRepository } from 'typeorm';
import UsersRepositories from './../repositories/UsersRepositories';

interface IAuthenticateRequest {
	email: string;
	password: string;
}

export default class AuthenticateUserService {
	async execute({ email, password }: IAuthenticateRequest) {
		const usersRepositories = getCustomRepository(UsersRepositories);

		if (!email) {
			throw new Error('Invalid email');
		}

		const user = await usersRepositories.findOne({ email });
		if (!user) {
			throw new Error('Email/Password incorrect');
		}

		// compare valida se a senha passada == hash da senha
		const verifyPassword = await compare(password, user.password);

		if (!verifyPassword) {
			throw new Error('Email/Password incorrect');
		}

		// sign gera o token
		const token = sign(
			{ email: user.email },
			// hash de segurança gerado com md5
			'963bbce5ccfc68f34b2d932af07a80d1',
			// expireIn == tempo de duração do token
			{ subject: user.id, expiresIn: '1d' }
		);

		return token;
	}
}
