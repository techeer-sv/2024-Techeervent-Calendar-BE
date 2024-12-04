import { QuestionEntity } from '../../entities/question.entity';

export class GetQuestionResponse {
    readonly questionId: number;
    readonly questionContent: string;

    constructor(questionEntity: QuestionEntity) {
        this.questionId = questionEntity.questionId;
        this.questionContent = questionEntity.questionContent;
    }
}
