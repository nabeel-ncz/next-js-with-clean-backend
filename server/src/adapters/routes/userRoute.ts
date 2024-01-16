import { Router } from "express";
import { Container } from "inversify";
import { INTERFACE_TYPE } from "../../utils";
import { IUserRepository } from "../../interfaces/user/IUserRepository";
import { IUserInteractor } from "../../interfaces/user/IUserInteractor";
import { UserInteractor } from "../../interactors/userInteractor";
import { UserRepository } from "../../database/repositories/userRepository";
import UserController from "../controllers/userController";
const router: Router = Router();

const container = new Container();

container.bind<IUserRepository>(INTERFACE_TYPE.UserRepository).to(UserRepository);
container.bind<IUserInteractor>(INTERFACE_TYPE.UserInteractor).to(UserInteractor);
container.bind(INTERFACE_TYPE.UserController).to(UserController);

const controller = container.get<UserController>(INTERFACE_TYPE.UserController);

router.route('/register')
    .post(controller.onRegisterUser.bind(controller));

router.route('/login')
    .post(controller.onLoginUser.bind(controller));

router.route('/:id')
    .get(controller.onGetUser.bind(controller))
    .put(controller.onUpdateUser.bind(controller));

export default router;