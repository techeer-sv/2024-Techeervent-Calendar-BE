import { Injectable } from '@nestjs/common';
import { AnswerRepository } from './repository/answer.repository';

@Injectable()
export class AnswerService {
    constructor(private readonly answerRepository: AnswerRepository) {}
}
