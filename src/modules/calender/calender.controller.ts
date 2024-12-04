import { Controller, Get, Param } from '@nestjs/common';
import { CalenderService } from './calender.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Calender')
@Controller('calender')
export class CalenderController {
    constructor(private readonly calenderService: CalenderService) {}

    @Get('/:userId')
    @ApiOperation({
        summary: '유저 별 캘린더 조회',
        description:
            '유저 별 캘린더 내용을 조회합니다. 출석한 날짜에 대한 데이터만 존재합니다.',
    })
    async getUserCalender(@Param('userId') userId: number): Promise<any> {
        const userCalender = await this.calenderService.getUserCalender(userId);
        return {
            message: '유저의 캘린더 내용을 조회했습니다.',
            data: userCalender,
        };
    }

    @Get('/answer/count')
    @ApiOperation({
        summary: '답변 개수 조회',
        description: '저장된 답변의 개수를 조회합니다.',
    })
    async getAnswerCount(): Promise<any> {
        const answerCount = await this.calenderService.getAnswerCount();
        return {
            message: '저장된 답변의 개수를 조회 했습니다.',
            data: answerCount,
        };
    }
}
