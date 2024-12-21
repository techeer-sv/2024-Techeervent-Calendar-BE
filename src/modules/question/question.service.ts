import { Injectable } from '@nestjs/common';
import { QuestionRepository } from './repository/question.repository';
import { GetQuestionResponse } from './dto/response/get.question.response';
import { UserRepository } from '../user/repository/user.repository';

@Injectable()
export class QuestionService {
    constructor(
        private readonly questionRepository: QuestionRepository,
        private readonly userRepository: UserRepository,
    ) {}

    async getQuestion(hashedUserId: string): Promise<GetQuestionResponse> {
        const userId =
            await this.userRepository.getUserIdByHashedId(hashedUserId);
        const question = await this.questionRepository.getQuestion(userId);
        return new GetQuestionResponse(question);
    }
}
