import { Controller, Get } from '@nestjs/common';
import { CalenderService } from './calender.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Calender')
@Controller('calender')
export class CalenderController {
    constructor(private readonly calenderService: CalenderService) {}

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
