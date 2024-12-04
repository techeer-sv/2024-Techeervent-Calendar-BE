import { Injectable } from '@nestjs/common';
import { CalenderRepository } from './repository/calender.repository';
import { GetAnswerCountResponse } from './dto/response/get.answer-count.response';

@Injectable()
export class CalenderService {
    constructor(private readonly calenderRepository: CalenderRepository) {}

    async getAnswerCount(): Promise<GetAnswerCountResponse> {
        const answerCount = await this.calenderRepository.getAnswerCount();
        return new GetAnswerCountResponse(answerCount);
    }
}
