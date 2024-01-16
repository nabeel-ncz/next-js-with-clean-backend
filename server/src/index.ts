import dotenv from "dotenv"
dotenv.config();
import "reflect-metadata";
import envChecker from "./utils/checkers/envChecker";
import App from "./app";
import { Application } from "express";
import { connectToDatabase } from "./database";

(async () => {
    try {
        await envChecker();
        await connectToDatabase();
        const app: Application = new App().app;
        const port: number | string = process.env.PORT || 4000;
        app.listen(port, () => { console.log(`Server listening at ${port}`) });
    } catch (error) {
        console.log('Oops!', error);
        process.exit(1);
    }
})();