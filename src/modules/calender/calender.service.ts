import { Injectable } from '@nestjs/common';
import { CalenderRepository } from './repository/calender.repository';
import { GetAnswerCountResponse } from './dto/response/get.answer-count.response';
import { GetCalenderResponse } from './dto/response/get.calender.response';

@Injectable()
export class CalenderService {
    constructor(private readonly calenderRepository: CalenderRepository) {}

    async getUserCalender(userId: number): Promise<GetCalenderResponse[]> {
        const userCalender =
            await this.calenderRepository.getUserCalender(userId);
        return userCalender.map(
            (calender) => new GetCalenderResponse(calender),
        );
    }

    async getAnswerCount(): Promise<GetAnswerCountResponse> {
        const answerCount = await this.calenderRepository.getAnswerCount();
        return new GetAnswerCountResponse(answerCount);
    }
}
