import { Calender, Question } from '@prisma/client';
import { WinningEntity } from '../../winning/entities/winning.entity';

export class CalenderEntity implements Calender {
    calenderId: number;
    calenderDate: number;
    userId: number;
    questionId: number;
    calenderAnswer: string;
    createdAt: Date;

    question: Question;
    winnings: WinningEntity[];
}
