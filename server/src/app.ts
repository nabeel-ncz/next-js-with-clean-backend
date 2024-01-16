import express, { Application } from "express";
import UserRouter from "./adapters/routes/userRoute";
import { errorHandler, notFoundHandler } from "./adapters/middlewares/errorHandler";

class App {
    public app: Application;

    constructor() {
        this.app = express();
        this.plugins();
        this.routes();
    }

    protected plugins(): void {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    protected routes(): void {
        this.app.use('/api/user', UserRouter);
        this.app.all("*", notFoundHandler);
        // this.app.use(errorHandler);
    }
}

export default App;