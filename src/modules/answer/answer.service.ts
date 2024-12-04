import { Injectable } from '@nestjs/common';
import { AnswerRepository } from './repository/answer.repository';
import { GetAnswerCountResponse } from './dto/response/get.answer-count.response';

@Injectable()
export class AnswerService {
    constructor(private readonly answerRepository: AnswerRepository) {}

    async getAnswerCount(): Promise<GetAnswerCountResponse> {
        const answerCount = await this.answerRepository.getAnswerCount();
        return new GetAnswerCountResponse(answerCount);
    }
}
