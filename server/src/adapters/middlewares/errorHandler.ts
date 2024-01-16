import { Request, Response } from "express"

export const errorHandler = (error: Error, req: Request, res: Response) => {
    res.status(400).json({
        success: false,
        error: {},
        message: error?.message
    });
};

export const notFoundHandler = (req: Request, res: Response) => {
    res.status(404).json({
        success: false,
        error: {},
        message: "Page not found!"
    })
}