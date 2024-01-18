import { IResultInteractor } from "../interfaces/results/IResultInteractor";

export class ResultInteractor implements IResultInteractor {
    createResult(input: { user_id: string; quiz_id: string; responses: any[]; }): Promise<string> {
        throw new Error("Method not implemented.");
    }
    getUserResult(id: string): Promise<any> {
        throw new Error("Method not implemented.");
    }

}