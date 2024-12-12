import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CalendarService } from './calendar.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { GetAnswerRequest } from './dto/request/get.answer.request';
import { CreateCalendarRequest } from './dto/request/create.calendar.request';

@ApiTags('Calendar')
@Controller('calendar')
export class CalendarController {
    constructor(private readonly calendarService: CalendarService) {}

    @Post()
    @ApiOperation({
        summary: '출석 및 경품 추첨',
        description: '답변을 저장해 출석한 후 경품 추첨 결과를 반환합니다.',
    })
    async createCalendarDraw(
        @Body() request: CreateCalendarRequest,
    ): Promise<any> {
        const result = await this.calendarService.createCalendarDraw(request);
        return {
            message: '출석 처리 후 경품 추첨 결과를 조회했습니다.',
            data: result,
        };
    }

    @Get('/answer')
    @ApiOperation({
        summary: '답변 목록 조회 및 검색',
        description:
            '전체 답변 내역을 조회하거나 유저 별 답변 내역을 검색합니다. 페이지네이션 방식이 적용됩니다.',
    })
    async getAllAnswers(@Query() request: GetAnswerRequest): Promise<any> {
        const answers = await this.calendarService.getAllAnswers(request);
        return {
            message: '답변 내역을 조회했습니다.',
            data: answers,
        };
    }

    @Get('/answer/count')
    @ApiOperation({
        summary: '답변 개수 조회',
        description: '저장된 답변의 개수를 조회합니다.',
    })
    async getAnswerCount(): Promise<any> {
        const answerCount = await this.calendarService.getAnswerCount();
        return {
            message: '저장된 답변의 개수를 조회 했습니다.',
            data: answerCount,
        };
    }

    @Get('/:userId')
    @ApiOperation({
        summary: '유저 별 캘린더 조회',
        description:
            '유저 별 캘린더 내용을 조회합니다. 출석한 날짜에 대한 데이터만 존재합니다.',
    })
    async getUserCalendar(@Param('userId') userId: number): Promise<any> {
        const userCalendar = await this.calendarService.getUserCalendar(userId);
        return {
            message: '유저의 캘린더 내용을 조회했습니다.',
            data: userCalendar,
        };
    }
}
