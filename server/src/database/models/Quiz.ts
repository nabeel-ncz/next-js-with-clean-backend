import mongoose, { Schema, Types } from "mongoose";

interface IQuizSchema {
    _id: Types.ObjectId;
    instructor_id: Types.ObjectId;
    title: string;
    description: string;
    createdAt: Date;
    question_score: number,
    questions: IQuestionSchema[];
}

interface IQuestionSchema {
    question_text: string;
    answers: IAnswerSchema[];
}

interface IAnswerSchema {
    answer_text: string;
    is_correct: boolean;
}


const AnswerSchema = new Schema<IAnswerSchema>({
    answer_text: { type: String, required: true },
    is_correct: { type: Boolean, required: true },
});

const QuestionSchema = new Schema<IQuestionSchema>({
    question_text: { type: String, required: true },
    answers: [AnswerSchema],
});

const QuizSchema = new Schema<IQuizSchema>({
    instructor_id: { type: Schema.Types.ObjectId, ref: 'users', required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    question_score: { type: Number, required: true },
    questions: [QuestionSchema]
}, { timestamps: true });


export const Quiz = mongoose.model("quizzes", QuizSchema);
