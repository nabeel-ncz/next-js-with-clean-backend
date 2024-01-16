import { UserEntity } from "../../entities/userEntity";
import { ObjectId } from "mongoose";

export interface IUserRepository {
    create(data: UserEntity): Promise<string>;

    login(data: { email: string, password: string }): Promise<{name: string, id: string}>;
    
    update(id: string, data: UserEntity): Promise<void>;
    
    findById(id: string): Promise<{_id: string, name:string, email: string}>;
    
    findMany(): Promise<UserEntity[]>;
}