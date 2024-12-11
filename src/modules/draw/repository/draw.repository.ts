import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { DrawEntity } from '../entities/draw.entity';

@Injectable()
export class DrawRepository {
    constructor(private readonly prisma: PrismaService) {}

    async getAllDraws(): Promise<DrawEntity[]> {
        return this.prisma.draw.findMany({
            orderBy: {
                drawTotal: 'asc',
            },
        });
    }

    // 개발용 임시 랜덤 추첨 - 무조건 당첨으로 랜덤 하나 나오고 있음
    async executeDraw(): Promise<DrawEntity> {
        const allDraws = await this.getAllDraws();
        return allDraws[Math.floor(Math.random() * allDraws.length)];
    }
}
