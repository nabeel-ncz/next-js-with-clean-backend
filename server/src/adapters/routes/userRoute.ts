import { Router } from "express";
import { Container } from "inversify";
import { INTERFACE_TYPE_USER } from "../../utils";
import { IUserRepository } from "../../interfaces/user/IUserRepository";
import { IUserInteractor } from "../../interfaces/user/IUserInteractor";
import { UserInteractor } from "../../interactors/userInteractor";
import { UserRepository } from "../../database/repositories/userRepository";
import UserController from "../controllers/userController";
import isAuthorized from "../middlewares/authorizationMiddleware";
const router: Router = Router();

const container = new Container();

container.bind<IUserRepository>(INTERFACE_TYPE_USER.UserRepository).to(UserRepository);
container.bind<IUserInteractor>(INTERFACE_TYPE_USER.UserInteractor).to(UserInteractor);
container.bind(INTERFACE_TYPE_USER.UserController).to(UserController);

const controller = container.get<UserController>(INTERFACE_TYPE_USER.UserController);

router.route('/isAuthorized')
    .get(isAuthorized, controller.onGetAuthoriazation.bind(controller));

router.route('/register')
    .post(controller.onRegisterUser.bind(controller));

router.route('/login')
    .post(controller.onLoginUser.bind(controller));

router.route('/:id')
    .get(controller.onGetUser.bind(controller))
    .put(controller.onUpdateUser.bind(controller));

export default router;