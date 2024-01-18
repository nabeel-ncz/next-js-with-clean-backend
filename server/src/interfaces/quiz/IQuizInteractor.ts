export interface IQuizInteractor {
    createQuiz(input: {
        instructor_id: string;
        title: string;
        description: string;
        questions?: any[];
    }): Promise<void>;

    updateQuiz(id: string, updates: any): Promise<void>;

    getQuiz(id: string): Promise<any>;

    getQuizzes(): Promise<any[]>;
}