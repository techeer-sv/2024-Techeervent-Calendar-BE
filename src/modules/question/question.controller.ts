import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { QuestionService } from './question.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { GetQuestionResponse } from './dto/response/get.question.response';

@ApiTags('Question')
@Controller('question')
export class QuestionController {
    constructor(private readonly questionService: QuestionService) {}

    @Get('/:userId')
    @ApiOperation({
        summary: '랜덤 질문 조회',
        description:
            '랜덤으로 질문 하나를 조회합니다. 사용자가 입력하지 않은 질문 중 랜덤으로 한 개가 조회 됩니다.',
    })
    async getQuestion(
        @Param('userId', ParseIntPipe) userId: number,
    ): Promise<GetQuestionResponse> {
        return this.questionService.getQuestion(userId);
    }
}
