import jwt from "jsonwebtoken";

export const generateToken = (
    payload: {
        name: string,
        id: string
    }
) => {
    return jwt.sign(payload, process.env.USER_JWT_SECRET, {
        expiresIn: "30d"
    })
}