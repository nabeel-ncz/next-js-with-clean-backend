class AnswerEntity {
    constructor(
        public readonly answer_text: string,
        public readonly is_correct: boolean,
    ) { }
}

class QuestionEntity {
    constructor(
        public readonly question_text: string,
        public readonly answers: AnswerEntity[],
    ) { }
}

export class QuizEntity {
    constructor(
        public readonly instructor_id: string,
        public readonly title: string,
        public readonly description: string,
        public readonly questions?: QuestionEntity[],
        public readonly createdAt?: Date
    ) { }
}
