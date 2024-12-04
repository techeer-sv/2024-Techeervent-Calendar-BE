import { Controller, Get } from '@nestjs/common';
import { AnswerService } from './answer.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Answer')
@Controller('answer')
export class AnswerController {
    constructor(private readonly answerService: AnswerService) {}

    @Get('/count')
    @ApiOperation({
        summary: '답변 개수 조회',
        description: '저장된 답변의 개수를 조회합니다.',
    })
    async getAnswerCount(): Promise<any> {
        const answerCount = await this.answerService.getAnswerCount();
        return {
            message: '저장된 답변의 개수를 조회 했습니다.',
            data: answerCount,
        };
    }
}
