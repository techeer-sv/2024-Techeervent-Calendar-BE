import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CalenderEntity } from '../entities/calender.entity';

@Injectable()
export class CalenderRepository {
    constructor(private readonly prisma: PrismaService) {}

    async getUserCalender(userId: number): Promise<CalenderEntity[]> {
        return this.prisma.calender.findMany({
            where: { userId },
            include: {
                question: true,
                winnings: {
                    include: {
                        draw: true,
                        user: true,
                    },
                },
            },
            orderBy: {
                calenderDate: 'asc',
            },
        });
    }

    async getAnswerCount(): Promise<number> {
        return this.prisma.calender.count();
    }
}
