import { ResultsEntity } from "../../entities/resultsEntity";
import { IResultRepository } from "../../interfaces/results/IResultRepository";

export class ResultRepository implements IResultRepository{
    create(data: ResultsEntity): Promise<string> {
        throw new Error("Method not implemented.");
    }
    findById(id: string): Promise<ResultsEntity | null> {
        throw new Error("Method not implemented.");
    }
    findMany(): Promise<ResultsEntity[]> {
        throw new Error("Method not implemented.");
    }

}