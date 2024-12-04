import { Calender } from '@prisma/client';

export class CalenderEntity implements Calender {
    calenderId: number;
    calenderDate: number;
    calenderOpened: boolean;
    userId: number;
    createdAt: Date;
}
