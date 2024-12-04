import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { WinningEntity } from '../entities/winning.entity';

@Injectable()
export class WinningRepository {
    constructor(private readonly prisma: PrismaService) {}

    async getAllWinnings(): Promise<WinningEntity[]> {
        return this.prisma.winning.findMany({
            include: {
                draw: true,
                user: true,
            },
            orderBy: {
                createdAt: 'desc',
            },
        });
    }
}
