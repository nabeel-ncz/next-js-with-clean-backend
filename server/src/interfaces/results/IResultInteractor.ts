export interface IResultInteractor {
    createResult(input: {
        user_id: string;
        quiz_id: string;
        responses: any[];
    }): Promise<string>;

    getUserResult(id: string): Promise<any>;
}