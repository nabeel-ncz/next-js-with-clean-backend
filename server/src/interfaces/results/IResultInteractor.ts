export interface IResultInteractor {
    createResult(input: {
        user_id: string;
        quiz_id: string;
        responses: any[];
        question_score: number,
    }): Promise<void>;

    getUserResult(id: string): Promise<any>;
}