import { Controller } from '@nestjs/common';
import { AnswerService } from './answer.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Answer')
@Controller('answer')
export class AnswerController {
    constructor(private readonly answerService: AnswerService) {}
}
