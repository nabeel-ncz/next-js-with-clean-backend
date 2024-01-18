import { injectable } from "inversify";
import { QuizEntity } from "../../entities/quizEntity";
import { IQuizRepository } from "../../interfaces/quiz/IQuizRepository";
import { Quiz } from "../models/Quiz";

@injectable()
export class QuizRepository implements IQuizRepository {

    async create(data: QuizEntity): Promise<void> {
        try {
            const newQuiz = await Quiz.create(data);
            console.log(newQuiz)
            return;
        } catch (error: any) {
            throw new Error(error?.message);
        }
    }

    async update(id: string, data: QuizEntity): Promise<void> {
        try {
            const updatedQuiz = await Quiz.findOneAndUpdate({ _id: id }, data);
            console.log(updatedQuiz)
            return;
        } catch (error: any) {
            throw new Error(error?.message);
        }
    }

    async findById(id: string): Promise<QuizEntity | null> {
        try {
            const quiz = await Quiz.findById(id).lean();
            if (!quiz) {
                throw new Error("Quiz not found!");
            }
            const resultEntity = new QuizEntity(
                quiz.instructor_id.toString(),
                quiz.title,
                quiz.description,
                quiz.questions,
                quiz.createdAt
            );
            return resultEntity;
        } catch (error: any) {
            throw new Error(error?.message);
        }
    }

    async findMany(): Promise<any[]> {
        try {
            const result = await Quiz.find({});
            return result;
        } catch (error: any) {
            throw new Error(error?.message);
        }
    }
} 