export const INTERFACE_TYPE_USER = {
    UserRepository: Symbol.for("UserRepository"),
    UserInteractor: Symbol.for("UserInteractor"),
    UserController: Symbol.for("UserController")
};
export const INTERFACE_TYPE_QUIZ = {
    QuizRepository: Symbol.for("QuizRepository"),
    QuizInteractor: Symbol.for("QuizInteractor"),
    QuizController: Symbol.for("QuizController")
};
export const INTERFACE_TYPE_RESULT = {
    ResultRepository: Symbol.for("ResultRepository"),
    ResultInteractor: Symbol.for("ResultInteractor"),
    ResultController: Symbol.for("ResultController")
};