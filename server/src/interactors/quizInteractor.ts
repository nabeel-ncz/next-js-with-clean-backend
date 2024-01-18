import { IQuizInteractor } from "../interfaces/quiz/IQuizInteractor";

export class QuizInteractor implements IQuizInteractor{
    createQuiz(input: { instructor_id: string; title: string; description: string; questions?: any[] | undefined; }): Promise<string> {
        throw new Error("Method not implemented.");
    }
    updateQuiz(id: string, updates: any): Promise<void> {
        throw new Error("Method not implemented.");
    }
    getQuiz(id: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
    
}