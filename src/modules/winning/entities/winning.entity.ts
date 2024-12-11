import { Draw, User, Winning } from '@prisma/client';

export class WinningEntity implements Winning {
    winningId: number;
    drawId: number;
    userId: number;
    calendarId: number;
    createdAt: Date;

    draw: Draw;
    user: User;
}
