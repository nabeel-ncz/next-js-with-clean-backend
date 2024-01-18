export interface IQuizInteractor {
    createQuiz(input: {
        instructor_id: string;
        title: string;
        description: string;
        questions?: any[];
    }): Promise<string>;

    updateQuiz(id: string, updates: any): Promise<void>;

    getQuiz(id: string): Promise<any>;
}