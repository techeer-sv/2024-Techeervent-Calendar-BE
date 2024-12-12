import { Injectable } from '@nestjs/common';
import { QuestionRepository } from './repository/question.repository';
import { GetQuestionResponse } from './dto/response/get.question.response';
import { UserRepository } from '../user/repository/user.repository';
import { NotFoundUserException } from '../../global/exception/custom.exception';

@Injectable()
export class QuestionService {
    constructor(
        private readonly questionRepository: QuestionRepository,
        private readonly userRepository: UserRepository,
    ) {}

    async getQuestion(userId: number): Promise<GetQuestionResponse> {
        if (!(await this.userRepository.getUserById(userId))) {
            throw new NotFoundUserException();
        }
        const question = await this.questionRepository.getQuestion(userId);
        return new GetQuestionResponse(question);
    }
}
