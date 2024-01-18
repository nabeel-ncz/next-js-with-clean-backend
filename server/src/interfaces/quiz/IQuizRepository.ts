import { QuizEntity } from "../../entities/quizEntity";

export interface IQuizRepository {
    create(data: QuizEntity): Promise<void>;

    update(id: string, data: QuizEntity): Promise<void>;

    findById(id: string): Promise<QuizEntity | null>;

    findMany(): Promise<any[]>;
}