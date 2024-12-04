import { Draw, User } from '@prisma/client';

export class WinningEntity {
    winningId: number;
    drawId: number;
    userId: number;
    calenderId: number;
    createdAt: Date;

    draw: Draw;
    user: User;
}
