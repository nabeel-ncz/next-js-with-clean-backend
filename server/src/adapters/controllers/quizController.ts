import { Request, Response, NextFunction } from "express";
import { IQuizInteractor } from "../../interfaces/quiz/IQuizInteractor";
import { inject, injectable } from "inversify";
import { INTERFACE_TYPE_QUIZ } from "../../utils";

@injectable()
class QuizController{

    private interactor: IQuizInteractor;

    constructor(
        @inject(INTERFACE_TYPE_QUIZ.QuizInteractor) interactor: IQuizInteractor
    ){
        this.interactor = interactor;
    }

    async onCreateQuiz (req: Request, res: Response, next: NextFunction){
        
        try{
            await this.interactor.createQuiz(req.body);
            res.status(201).json({
                success: true,
                data:{},
                message:"Quiz created successfully"
            });
        } catch (error: any){
            next(error);
        }
    
    }

    async onGetQuizzes(req: Request, res: Response, next: NextFunction) {

        try{
            const result = await this.interactor.getQuizzes();
            res.status(200).json({
                success: true,
                data: result,
                message:"Quizzes retrieved successfully"
            })
        } catch (error){
            next(error);
        }

    }

    async onGetQuiz(req: Request, res: Response, next: NextFunction){

        try{
            const result = await this.interactor.getQuiz(req.params?.id);
            res.status(200).json({
                success: true,
                data: result,
                message:"Quiz data retrieved successfully"
            })
        } catch (error){
            next(error);
        }

    }

    async onUpdateQuiz(req: Request, res: Response, next: NextFunction){
        next(new Error("Method not implemented"));
    }
}

export default QuizController;