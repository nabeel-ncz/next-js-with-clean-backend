import { ResultsEntity } from "../../entities/resultsEntity";

export interface IResultRepository {
    create(data: ResultsEntity): Promise<string>;

    findById(id: string): Promise<ResultsEntity | null>;

    findMany(): Promise<ResultsEntity[]>;
}