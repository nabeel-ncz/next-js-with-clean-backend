import { Router } from "express";
const router: Router = Router();
import { Container } from "inversify";
import { INTERFACE_TYPE_QUIZ } from "../../utils";
import { IQuizRepository } from "../../interfaces/quiz/IQuizRepository";
import { QuizRepository } from "../../database/repositories/quizRepository";
import { IQuizInteractor } from "../../interfaces/quiz/IQuizInteractor";
import { QuizInteractor } from "../../interactors/quizInteractor";
import QuizController from "../controllers/quizController";

const container = new Container();
container.bind<IQuizRepository>(INTERFACE_TYPE_QUIZ.QuizRepository).to(QuizRepository);
container.bind<IQuizInteractor>(INTERFACE_TYPE_QUIZ.QuizInteractor).to(QuizInteractor);
container.bind(INTERFACE_TYPE_QUIZ.QuizController).to(QuizController);

const controller = container.get<QuizController>(INTERFACE_TYPE_QUIZ.QuizController);

router.route('/')
    .post(controller.onCreateQuiz.bind(controller))
    .get(controller.onGetQuizzes.bind(controller));

router.route('/:id')
    .get(controller.onGetQuiz.bind(controller))
    .put(controller.onUpdateQuiz.bind(controller));


export default router;