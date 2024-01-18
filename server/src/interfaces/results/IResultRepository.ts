import { ResultsEntity } from "../../entities/resultsEntity";

export interface IResultRepository {
    create(data: ResultsEntity): Promise<void>;

    findById(id: string): Promise<ResultsEntity | null>;

    findByUserId(id: string): Promise<any[]>;
}