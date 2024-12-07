import { Injectable } from '@nestjs/common';
import { QuestionRepository } from './repository/question.repository';
import { QuestionEntity } from './entities/question.entity';
import { GetQuestionResponse } from './dto/response/get.question.response';

@Injectable()
export class QuestionService {
    constructor(private readonly questionRepository: QuestionRepository) {}

    async getQuestion(userId: number): Promise<GetQuestionResponse> {
        const question = await this.questionRepository.getQuestion(userId);
        return new GetQuestionResponse(question);
    }
}
