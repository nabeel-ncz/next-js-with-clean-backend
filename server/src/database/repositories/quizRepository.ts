import { QuizEntity } from "../../entities/quizEntity";
import { IQuizRepository } from "../../interfaces/quiz/IQuizRepository";

export class QuizRepository implements IQuizRepository{
    create(data: QuizEntity): Promise<string> {
        throw new Error("Method not implemented.");
    }
    update(id: string, data: QuizEntity): Promise<void> {
        throw new Error("Method not implemented.");
    }
    findById(id: string): Promise<QuizEntity | null> {
        throw new Error("Method not implemented.");
    }
    findMany(): Promise<QuizEntity[]> {
        throw new Error("Method not implemented.");
    }

} 