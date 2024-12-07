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
}
