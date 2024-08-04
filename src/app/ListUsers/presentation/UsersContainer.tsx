import { useEffect, useState } from "react"
import { Users } from "../domain/Users"
import UserUseCase from "../application/UsersUseCase";
import UserView from "./UserView";

interface usersProps {
    users: Users
}

const UsersList = ({users}:usersProps): React.ReactNode => {
    const userList = users.map((user, index) => {
        return <li key={index}> 
            <span><b>Name:</b> {user.name}</span> <br />
            <span><b>Email:</b> {user.email}</span>
            <hr /><br />
        </li>
    })

    return <ul>{userList}</ul> ;
}

const UsersContainer = () => {
    const [users, setUsers]= useState<Users>([]);
    useEffect(() => {
        (async () => {
            const useCase = UserUseCase();
            const usersData:Users = await useCase.getUsers();
            setUsers(usersData);
        })();
    }, []);
    
    return <UserView className="user-container"> <UsersList users={users}></UsersList> </UserView>
}

export default UsersContainer;
