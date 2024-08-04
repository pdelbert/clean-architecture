import { Users } from "./Users";

export interface UserRepository {
    getUsers(): Promise<Users>
}
