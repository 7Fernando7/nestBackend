
import { RegisterUser } from "../entities/register.entity";


export interface RegisterResponse {
    user: RegisterUser;
    token: string;
}