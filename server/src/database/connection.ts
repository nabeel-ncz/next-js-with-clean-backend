import mongoose from "mongoose";

export default async () => {
    try {
        const connection_url: string = process.env.MONGODB_URI || '';
        await mongoose.connect(connection_url);
        console.log('Database connection success!');
    } catch (error) {
        console.log('Database connection failed!', error);
    }
}