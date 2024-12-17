import { GetAnswerResponse } from './get.answer.response';
import { PagableMeta } from '../../../../global/common/pagable-meta';

export class GetAnswerPagableResponse {
    readonly answers: GetAnswerResponse[];
    readonly meta: PagableMeta;

    constructor(answers: GetAnswerResponse[], meta: PagableMeta) {
        this.answers = answers;
        this.meta = meta;
    }
}
