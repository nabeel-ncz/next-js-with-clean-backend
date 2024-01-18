import { Request, Response, NextFunction } from "express";
import { IUserInteractor } from "../../interfaces/user/IUserInteractor";
import { inject, injectable } from "inversify";
import { INTERFACE_TYPE_USER } from "../../utils";
import { generateToken } from "../../utils/jwt/generateToken";
import { userRegisterValidator } from "../../utils/validators/userValidators";
import bcrypt from "bcrypt";

@injectable()
class UserController {

    private interactor: IUserInteractor;

    constructor(
        @inject(INTERFACE_TYPE_USER.UserInteractor) interactor: IUserInteractor
    ) {
        this.interactor = interactor;
    }

    async onRegisterUser(req: Request, res: Response, next: NextFunction) {
        try {
            const validation = userRegisterValidator(req.body);
            if (!validation.success) {
                throw new Error(validation.error?.errors[0]?.message || validation.error?.message || "Validation failed!");
            }
            const { name, email, password } = req.body;
            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(password, salt);
            const userId: string = await this.interactor.createUser({
                name,
                email,
                password: hash
            });
            const token = generateToken({ name, id: userId });
            res
                .cookie("auth", token, {
                    maxAge: 1000 * 60 * 60 * 24 * 10,
                    httpOnly: true,
                })
                .status(201)
                .json({
                    success: true,
                    data: {},
                    message: "User created successfully!"
                })
        } catch (error: any) {
            res
                .status(400)
                .json({
                    success: false,
                    error: error?.message,
                    message: "User creation failed!"
                });
        }
    }

    async onLoginUser(req: Request, res: Response, next: NextFunction) {
        try {
            const { email, password } = req.body;
            const data: { name: string, id: string } = await this.interactor.loginUser({
                email,
                password
            });
            const token = generateToken(data);
            res
                .cookie("auth", token, {
                    maxAge: 1000 * 60 * 60 * 24 * 10,
                    httpOnly: true,
                })
                .status(200)
                .json({
                    success: true,
                    data: {},
                    message: "User logged-in successfully!"
                })
        } catch (error: any) {
            res
                .status(400)
                .json({
                    success: false,
                    error: error?.message,
                    message: "User login failed!"
                });
        }
    }

    async onUpdateUser(req: Request, res: Response, next: NextFunction) {

    }
    
    async onGetUser(req: Request, res: Response, next: NextFunction) {
        try {
            const userId: string = req.params?.id;
            if (!userId || userId.trim() === "") throw new Error("UserId is not valid");
            const data = await this.interactor.getUser(userId);
            res
                .status(200)
                .json({
                    success: true,
                    data: data,
                    message: "User details retrieved"
                })
        } catch (error: any) {
            res
                .status(400)
                .json({
                    success: false,
                    error: error?.message,
                    message: "Get user failed!"
                });
        }
    }
}

export default UserController;