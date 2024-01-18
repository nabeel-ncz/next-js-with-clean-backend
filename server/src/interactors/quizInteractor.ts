import { inject, injectable } from "inversify";
import { QuizEntity } from "../entities/quizEntity";
import { IQuizInteractor } from "../interfaces/quiz/IQuizInteractor";
import { IQuizRepository } from "../interfaces/quiz/IQuizRepository";
import { INTERFACE_TYPE_QUIZ } from "../utils";

@injectable()
export class QuizInteractor implements IQuizInteractor {

    private repository: IQuizRepository;

    constructor(
        @inject(INTERFACE_TYPE_QUIZ.QuizRepository) repository: IQuizRepository
    ){
        this.repository = repository;
    }

    async createQuiz(input: {
        instructor_id: string;
        title: string;
        description: string;
        questions?: any[] | undefined;
    }): Promise<void> {

        try {
            const entity = new QuizEntity(
                input.instructor_id,
                input.title,
                input.description,
                input.questions
            );
            await this.repository.create(entity);
            return;
        } catch (error: any) {
            throw new Error(error?.message || "something went wrong!")
        }

    }

    async updateQuiz(id: string, updates: any): Promise<void> {

        try {
            await this.repository.update(id, updates);
            return;
        } catch (error: any) {
            throw new Error(error?.message || "something went wrong!")
        }

    }

    async getQuiz(id: string): Promise<any> {
        
        try {
            const result = await this.repository.findById(id);
            return result;
        } catch (error: any) {
            throw new Error(error?.message || "something went wrong!")
        }
    
    }

    async getQuizzes(): Promise<any[]> {
        
        try{
            const result = await this.repository.findMany();
            return result;
        }catch (error: any){
            throw new Error(error?.message || "something went wrong!")
        }

    }

}