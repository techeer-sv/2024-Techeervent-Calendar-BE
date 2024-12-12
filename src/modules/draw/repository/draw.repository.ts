import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';
import { DrawEntity } from '../entities/draw.entity';

@Injectable()
export class DrawRepository {
    constructor(private readonly prisma: PrismaService) {}

    async executeDrawLock(): Promise<DrawEntity | null> {
        return this.prisma.$transaction(async (transaction: PrismaClient) => {
            const draws = await this.getAllDraws(transaction);
            if (draws.length > 0) {
                const weightedDraws = draws.flatMap((draw) =>
                    Array(draw.drawTotal).fill(draw),
                );
                const selectedDraw =
                    weightedDraws[
                        Math.floor(Math.random() * weightedDraws.length)
                    ];
                await this.decrementDraw(selectedDraw.drawId, transaction);
                return selectedDraw;
            } else {
                return null;
            }
        });
    }

    private async getAllDraws(
        transaction: PrismaClient,
    ): Promise<DrawEntity[]> {
        return transaction.$queryRaw`
      SELECT d.* 
      FROM "Draw" d
      WHERE d."drawTotal" > 0
      FOR UPDATE;
    `;
    }

    private async decrementDraw(
        drawId: number,
        transaction: PrismaClient,
    ): Promise<void> {
        await transaction.draw.update({
            where: { drawId },
            data: { drawTotal: { decrement: 1 } },
        });
    }
}
