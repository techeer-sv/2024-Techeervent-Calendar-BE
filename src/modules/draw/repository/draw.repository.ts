import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { DrawEntity } from '../entities/draw.entity';

@Injectable()
export class DrawRepository {
    constructor(private readonly prisma: PrismaService) {}

    async getAllDrawsLock(): Promise<DrawEntity[]> {
        return this.prisma.$queryRaw`
      SELECT d.* 
      FROM "Draw" d
      WHERE d."drawTotal" > 0
      FOR UPDATE;
    `;
    }

    async decrementDraw(drawId: number): Promise<void> {
        await this.prisma.draw.update({
            where: { drawId },
            data: { drawTotal: { decrement: 1 } },
        });
    }
}
