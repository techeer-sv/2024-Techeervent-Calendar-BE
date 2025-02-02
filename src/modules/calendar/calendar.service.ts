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
    NotAcceptableAnswers,
    NotFoundQuestionException,
    ValidationCalendarDate,
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

    // 서버 날짜일자 반환
    async getKSTToday(): Promise<number> {
        const now = new Date();
        // UTC+9 시간으로 변환된 Date 객체 생성
        const kstDate = new Date(
            now.toLocaleString('en-US', { timeZone: 'Asia/Seoul' }),
        );
        return kstDate.getDate(); // UTC+9 기준으로 일자 반환
    }

    // 출석 및 경품 추첨
    async createCalendarDraw(
        request: CreateCalendarRequest,
    ): Promise<GetDrawResponse> {
        // 날짜 검증
        await this.validateDate(request.calendarDate);
        const userId = await this.userRepository.getUserIdByHashedId(
            request.userId,
        );
        await this.validateCalendarRequest(request, userId);
        const draw = await this.drawService.executeDraw(request.calendarDate);
        await this.calendarRepository.createCalendar(
            request,
            userId,
            draw ? draw.drawId : null,
        );
        return new GetDrawResponse(draw ? draw.drawName : null);
    }

    // 서버 일자 valdation
    private async validateDate(clientDate: number): Promise<void> {
        const serverDay = await this.getKSTToday();
        if (clientDate !== serverDay) {
            throw new ValidationCalendarDate(clientDate, serverDay);
        }
    }

    // 캘린더 생성 시 중복 검사
    private async validateCalendarRequest(
        request: CreateCalendarRequest,
        userId: number,
    ): Promise<void> {
        if (
            await this.calendarRepository.existingUserCalendarByDate(
                userId,
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
        const date = await this.getKSTToday();
        if (date >= 23 && date <= 30) {
            throw new NotAcceptableAnswers();
        }
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
    async getUserCalendar(
        hashedUserId: string,
    ): Promise<GetCalendarResponse[]> {
        const userId =
            await this.userRepository.getUserIdByHashedId(hashedUserId);
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
