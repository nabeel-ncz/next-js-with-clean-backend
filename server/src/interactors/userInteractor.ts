import { injectable, inject } from "inversify";
import { UserEntity } from "../entities/userEntity";
import { IUserInteractor } from "../interfaces/user/IUserInteractor";
import { IUserRepository } from "../interfaces/user/IUserRepository";
import { INTERFACE_TYPE } from "../utils";
import { ObjectId } from "mongoose";

@injectable()
export class UserInteractor implements IUserInteractor {

    private repository: IUserRepository;

    constructor(
        @inject(INTERFACE_TYPE.UserRepository) repository: IUserRepository
    ) {
        this.repository = repository;
    }

    async createUser({ name, email, password }: {
        name: string,
        email: string,
        password: string
    }): Promise<string> {
        try {
            const data = new UserEntity(name, email, password);
            const userId: string = await this.repository.create(data);
            return userId;
        } catch (error: any) {
            throw new Error(error?.message || 'Something went wrong!');
        }
    }

    async loginUser({ email, password }): Promise<{ name: string, id: string }> {
        try {
            const data = await this.repository.login({ email, password });
            return data;
        } catch (error: any) {
            throw new Error(error?.message || 'Something went wrong!');
        }
    }

    updateUser(id: string, updates: any): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async getUser(id: string): Promise<any> {
        try {
            const data: any = await this.repository.findById(id);
            return data;
        } catch (error: any) {
            throw new Error(error?.message || 'Something went wrong!');
        }
    }

}