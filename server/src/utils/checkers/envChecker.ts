
export default async () => {
    try {
        if (!process.env.MONGODB_URI) throw new Error('Mongodb uri is required!');
        if (!process.env.PORT) throw new Error('Port number is required!');
        if (!process.env.USER_JWT_SECRET) throw new Error('User jwt secret is required!');
    } catch (error) {
        console.log(error);
    }
}