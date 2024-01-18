import mongoose, { Schema, Types } from "mongoose";

interface IResultsItemSchema {
    question_id: Types.ObjectId;
    selected_answer_id: Types.ObjectId;
    is_correct: boolean;
}

interface IResultsSchema {
    user_id: Types.ObjectId;
    quiz_id: Types.ObjectId;
    responses: IResultsItemSchema[];
    submitted_at: Date;
}

const ResultsItemSchema = new Schema<IResultsItemSchema>({
    question_id: { type: Schema.Types.ObjectId, required: true },
    selected_answer_id: { type: Schema.Types.ObjectId, required: true },
    is_correct: { type: Boolean, required: true },
});

const ResultsSchema = new Schema<IResultsSchema>({
    user_id: { type: Schema.Types.ObjectId, ref: 'users', required: true },
    quiz_id: { type: Schema.Types.ObjectId, ref: 'quizzes', required: true },
    responses: [ResultsItemSchema],
    submitted_at: { type: Date, default: Date.now },
});

export const Results = mongoose.model("results", ResultsSchema);
