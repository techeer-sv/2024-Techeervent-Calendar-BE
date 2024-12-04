import { Calender } from '@prisma/client';

export class CalenderEntity implements Calender {
    calenderId: number;
    calenderDate: number;
    userId: number;
    questionId: number;
    calenderAnswer: string;
    createdAt: Date;
}
