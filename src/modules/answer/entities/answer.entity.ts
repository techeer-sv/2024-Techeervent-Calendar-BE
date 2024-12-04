import { Answer } from '@prisma/client';

export class AnswerEntity implements Answer {
    answerId: number;
    questionId: number;
    userId: number;
    answerContent: string;
    createdAt: Date;
}
