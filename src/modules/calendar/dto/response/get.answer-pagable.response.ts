import { GetAnswerResponse } from './get.answer.response';

export class GetAnswerPagableResponse {
    readonly hasNext: boolean;
    readonly answers: GetAnswerResponse[];

    constructor(hasNext: boolean, answers: GetAnswerResponse[]) {
        this.hasNext = hasNext;
        this.answers = answers;
    }
}
