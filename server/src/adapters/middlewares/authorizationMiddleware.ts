import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export default async (req: Request, res: Response, next: NextFunction) => {
    if (!req.cookies?.auth) {
        return res.status(400).json({
            success: false,
            error: {},
            message: "UnAuthorized"
        })
    }
    jwt.verify(req.cookies?.auth, process.env.USER_JWT_SECRET, (error: any, decoded: any) => {
        if (error) {
            return res.status(400).json({
                success: false,
                error: {},
                message: "UnAuthorized"
            })
        }
        next();
    });
}