import { Calendar, Question, User } from '@prisma/client';
import { WinningEntity } from '../../winning/entities/winning.entity';

export class CalendarEntity implements Calendar {
    calendarId: number;
    calendarDate: number;
    userId: number;
    questionId: number;
    calendarAnswer: string;
    createdAt: Date;

    user: User;
    question: Question;
    winning: WinningEntity;
}
