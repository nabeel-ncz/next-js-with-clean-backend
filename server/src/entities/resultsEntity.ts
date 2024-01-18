class ResultsItemEntity {
    constructor(
        public readonly question_id: string,
        public readonly selected_answer_id: string,
        public readonly is_correct: boolean,
    ) { }
}

export class ResultsEntity {
    constructor(
        public readonly user_id: string,
        public readonly quiz_id: string,
        public readonly responses: ResultsItemEntity[],
        public readonly submitted_at?: Date
    ) { }
}
