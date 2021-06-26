import { getCustomRepository } from "typeorm";
import UsersRepositories from "../repositories/UsersRepositories";

export default class GetAllUsersService{
    async execute(){
        const userRepository = getCustomRepository(UsersRepositories)

        const allUsers = await userRepository.find()

        return allUsers
    }
}