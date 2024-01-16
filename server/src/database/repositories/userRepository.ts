import { User } from "../models/User";
import { injectable } from "inversify";
import { UserEntity } from "../../entities/userEntity";
import { IUserRepository } from "../../interfaces/user/IUserRepository";
import bcrypt from "bcrypt";
import { ObjectId } from "mongoose";

@injectable()
export class UserRepository implements IUserRepository {
    async create(data: UserEntity): Promise<string> {
        try {
            const newUser = new User({
                name: data.name,
                email: data.email,
                password: data.password
            });
            const user = await newUser.save();
            if (!user) {
                throw new Error("User creation failed!");
            }
            return user._id.toString()
        } catch (error: any) {
            throw new Error(error?.message || 'User creation failed');
        }
    }

    async login(
        {
            email,
            password
        }: {
            email: string;
            password: string;
        }): Promise<{ name: string, id: string }> {
        try {
            const userExist = await User.findOne({ email });
            if (!userExist) {
                throw new Error("Email doesn't exist!");
            }
            const passwordMatch = await bcrypt.compare(password, userExist.password);
            if (!passwordMatch) {
                throw new Error("Email or password is incorrect, try again!");
            }
            return { name: userExist.name || '', id: userExist._id.toString() };
        } catch (error: any) {
            throw new Error(error?.message || "User login failed!");
        }
    }

    update(id: string, data: UserEntity): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async findById(id: string): Promise<{ _id: string, name: string, email: string }> {
        try {
            const user = await User.findById(id).select({ _id: 1, name: 1, email: 1 });
            if (!user) {
                throw new Error("User not found!");
            }
            return {_id: user._id.toString(), name: user.name || '', email: user.email };
        } catch (error: any) {
            throw new Error(error?.message || "User not found!");
        }
    }

    findMany(): Promise<UserEntity[]> {
        throw new Error("Method not implemented.");
    }

}