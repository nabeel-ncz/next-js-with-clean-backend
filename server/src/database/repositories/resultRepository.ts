import { ResultsEntity } from "../../entities/resultsEntity";
import { IResultRepository } from "../../interfaces/results/IResultRepository";

export class ResultRepository implements IResultRepository{

    create(data: ResultsEntity): Promise<void> {
        throw new Error("Method not implemented.");
    }
    
    findById(id: string): Promise<ResultsEntity | null> {
        throw new Error("Method not implemented.");
    }
    
    findByUserId(id: string): Promise<any[]> {
        throw new Error("Method not implemented.");
    }
 
}