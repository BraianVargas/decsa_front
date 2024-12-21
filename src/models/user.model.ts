import { Person } from "./person.model";

export interface User{
    personal_data: Person,
    user_id: number,
    username: string,
    password: string
}