import { EntityRepository, Repository } from 'typeorm';
import Compliments from '../entities/Compliments';

@EntityRepository(Compliments)
export default class ComplimentsRepositories extends Repository<Compliments> {}
