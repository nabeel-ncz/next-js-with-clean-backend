import { QuizEntity } from "../../entities/quizEntity";

export interface IQuizRepository {
    create(data: QuizEntity): Promise<string>;

    update(id: string, data: QuizEntity): Promise<void>;

    findById(id: string): Promise<QuizEntity | null>;

    findMany(): Promise<QuizEntity[]>;
}