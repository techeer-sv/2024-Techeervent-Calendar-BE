import { Question } from '@prisma/client';

export class QuestionEntity implements Question {
    questionId: number;
    questionContent: string;
    createdAt: Date;
}
