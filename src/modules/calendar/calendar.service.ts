import { Injectable } from '@nestjs/common';
import { CalendarRepository } from './repository/calendar.repository';
import { GetAnswerCountResponse } from './dto/response/get.answer-count.response';
import { GetCalendarResponse } from './dto/response/get.calendar.response';
import { GetAnswerResponse } from './dto/response/get.answer.response';
import { GetAnswerRequest } from './dto/request/get.answer.request';
import { GetCalendarDrawResponse } from './dto/response/get.calendar-draw.response';
import { CreateCalendarRequest } from './dto/request/create.calendar.request';
import { DrawService } from '../draw/draw.service';

@Injectable()
export class CalendarService {
    constructor(
        private readonly calendarRepository: CalendarRepository,
        private readonly drawService: DrawService,
    ) {}

    async getUserCalendar(userId: number): Promise<GetCalendarResponse[]> {
        const userCalendar =
            await this.calendarRepository.getUserCalendar(userId);
        return userCalendar.map(
            (calendar) => new GetCalendarResponse(calendar),
        );
    }

    async getAllAnswers(
        request: GetAnswerRequest,
    ): Promise<GetAnswerResponse[]> {
        const answers = await this.calendarRepository.getAllAnswers(request);
        return answers.map((answer) => new GetAnswerResponse(answer));
    }

    async getAnswerCount(): Promise<GetAnswerCountResponse> {
        const answerCount = await this.calendarRepository.getAnswerCount();
        return new GetAnswerCountResponse(answerCount);
    }

    async getAllWinnings(): Promise<GetCalendarDrawResponse[]> {
        const winnings = await this.calendarRepository.getAllWinnings();
        return winnings.map((winning) => new GetCalendarDrawResponse(winning));
    }

    async createCalendarDraw(
        request: CreateCalendarRequest,
    ): Promise<GetCalendarDrawResponse> {
        const draw = await this.drawService.executeDraw();
        const drawId = draw ? draw.drawId : null;
        const calendar = await this.calendarRepository.createCalendar(
            request,
            drawId,
        );
        return new GetCalendarDrawResponse(calendar);
    }
}
