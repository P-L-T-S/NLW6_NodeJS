// um repositório faz a comunicação entre a entidade e o banco de dados
import { EntityRepository, Repository } from 'typeorm';
import User from '../entities/User';

@EntityRepository(User)
export default class UsersRepositories extends Repository<User> {}
