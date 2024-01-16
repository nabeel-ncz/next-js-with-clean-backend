import mongoose, { Schema } from "mongoose";

interface IUserSchema {
    name?: string
    email: string
    password: string
}

const userSchema = new Schema<IUserSchema>({
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

export const User = mongoose.model("users", userSchema);