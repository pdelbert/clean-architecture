import { Users } from "../domain/Users";
import { UserRepository } from "../domain/UsersRepository";

const UserRepositoryImpl = (): UserRepository => ({
    getUsers: async ():Promise<Users> => {
        const response = await fetch(import.meta.env.APP_REQUEST_GET)
            .then(response => response)
            .then(data => data.json())
            .catch(error => console.log(error))
         
        return response;
    },
});

export default UserRepositoryImpl;
