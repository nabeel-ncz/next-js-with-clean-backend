import { Request, Response, NextFunction } from "express";
import { z } from "zod";

export const userRegisterValidator = (
    req: Request, 
    res: Response,
    next: NextFunction
) => {
    try {
        z.object({
            name: z.string().min(2),
            email: z.string().email(),
            password: z.string().min(6)
        }).parse(req.body);
        next();
    } catch (error) {
        next(error);
    }
}