import express, { Application } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import UserRouter from "./adapters/routes/userRoute";
import QuizRouter from "./adapters/routes/quizRoute";
import { errorHandler, notFoundHandler } from "./adapters/middlewares/errorHandler";

class App {
    public app: Application;

    constructor() {
        this.app = express();
        this.plugins();
        this.routes();
    }

    protected plugins(): void {
        this.app.use(cors({
            origin: "http://localhost:3000",
            methods: ['GET', 'PUT', 'PATCH', 'POST', 'DELETE'],
            credentials: true
        }));
        this.app.use(cookieParser());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    protected routes(): void {
        this.app.use('/api/user', UserRouter);
        this.app.use('/api/quiz', QuizRouter);
        this.app.all("*", notFoundHandler);
        this.app.use(errorHandler);
    }
}

export default App;