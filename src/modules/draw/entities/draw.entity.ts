import { Draw } from '@prisma/client';

export class DrawEntity implements Draw {
    drawId: number;
    drawName: string;
    drawTotal: number;
    createdAt: Date;
}
