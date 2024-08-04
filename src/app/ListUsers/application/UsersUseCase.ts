import { Users } from "../domain/Users";
import { UserRepository } from "../domain/UsersRepository";
import UserRepositoryImpl from "../infrastructure/UserRepositoryImpl";


const UserUseCase = ():UserRepository => ({
    getUsers: async(): Promise<Users> => {
        const userRepository = UserRepositoryImpl();
        return await userRepository.getUsers();
    }
});

export default UserUseCase;
