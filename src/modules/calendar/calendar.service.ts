import { Injectable } from '@nestjs/common';
import { CalendarRepository } from './repository/calendar.repository';
import { GetAnswerCountResponse } from './dto/response/get.answer-count.response';
import { GetCalendarResponse } from './dto/response/get.calendar.response';
import { GetAnswerResponse } from './dto/response/get.answer.response';
import { GetAnswerRequest } from './dto/request/get.answer.request';
import { CreateCalendarRequest } from './dto/request/create.calendar.request';
import { DrawService } from '../draw/draw.service';
import { GetDrawResponse } from '../draw/dto/response/get.draw.response';
import { GetWinningResponse } from './dto/response/get.winning.response';
import { UserRepository } from '../user/repository/user.repository';
import {
    DuplicateCalendarByDate,
    NotFoundQuestionException,
    NotFoundUserException,
} from '../../global/exception/custom.exception';
import { QuestionRepository } from '../question/repository/question.repository';
import { GetAnswerPagableResponse } from './dto/response/get.answer-pagable.response';
import { PagableMeta } from '../../global/common/pagable-meta';

@Injectable()
export class CalendarService {
    constructor(
        private readonly calendarRepository: CalendarRepository,
        private readonly userRepository: UserRepository,
        private readonly questionRepository: QuestionRepository,
        private readonly drawService: DrawService,
    ) {}

    // 출석 및 경품 추첨
    async createCalendarDraw(
        request: CreateCalendarRequest,
    ): Promise<GetDrawResponse> {
        await this.validateCalendarRequest(request);
        const draw = await this.drawService.executeDraw(request.calendarDate);
        await this.calendarRepository.createCalendar(
            request,
            draw ? draw.drawId : null,
        );
        return new GetDrawResponse(draw ? draw.drawName : null);
    }

    private async validateCalendarRequest(
        request: CreateCalendarRequest,
    ): Promise<void> {
        if (!(await this.userRepository.getUserById(request.userId))) {
            throw new NotFoundUserException();
        }
        if (
            await this.calendarRepository.existingUserCalendarByDate(
                request.userId,
                request.calendarDate,
            )
        ) {
            throw new DuplicateCalendarByDate();
        }
        if (
            !(await this.questionRepository.getQuestionById(request.questionId))
        ) {
            throw new NotFoundQuestionException();
        }
    }

    // 답변 목록 조회 및 검색
    async getAllAnswers(
        request: GetAnswerRequest,
    ): Promise<GetAnswerPagableResponse> {
        const answers = await this.calendarRepository.getAllAnswers(request);
        const items = answers.items.map(
            (answer) => new GetAnswerResponse(answer),
        );
        // 메타 정보 생성
        const meta = new PagableMeta(
            answers.total,
            answers.items.length,
            request.page,
            request.limit,
        );
        return new GetAnswerPagableResponse(items, meta);
    }

    // 답변 개수 조회
    async getAnswerCount(): Promise<GetAnswerCountResponse> {
        const answerCount = await this.calendarRepository.getAnswerCount();
        return new GetAnswerCountResponse(answerCount);
    }

    // 유저 별 캘린더 조회
    async getUserCalendar(userId: number): Promise<GetCalendarResponse[]> {
        if (!(await this.userRepository.getUserById(userId))) {
            throw new NotFoundUserException();
        }
        const userCalendar =
            await this.calendarRepository.getUserCalendar(userId);
        return userCalendar.map(
            (calendar) => new GetCalendarResponse(calendar),
        );
    }

    // 당첨 목록 조회
    async getAllWinnings(): Promise<GetWinningResponse[]> {
        const winnings = await this.calendarRepository.getAllWinnings();
        return winnings.map((winning) => new GetWinningResponse(winning));
    }
}
