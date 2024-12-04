import { Injectable } from '@nestjs/common';
import { QuestionRepository } from './repository/question.repository';

@Injectable()
export class QuestionService {
    constructor(private readonly questionRepository: QuestionRepository) {}
}
