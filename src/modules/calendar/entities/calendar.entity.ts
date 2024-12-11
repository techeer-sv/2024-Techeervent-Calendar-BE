import { Calendar, Draw, Question, User } from '@prisma/client';

export class CalendarEntity implements Calendar {
    calendarId: number;
    calendarDate: number;
    calendarAnswer: string;
    userId: number;
    questionId: number;
    drawId: number | null;
    createdAt: Date;

    user: User;
    question: Question;
    draw: Draw | null;
}
