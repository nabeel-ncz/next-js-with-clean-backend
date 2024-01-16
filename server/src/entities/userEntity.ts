import { ObjectId } from "mongoose";

export class UserEntity {
    constructor(
        public readonly name: string,
        public readonly email: string,
        public readonly password?: string,
    ) {

    }
}