import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class CalenderRepository {
    constructor(private readonly prisma: PrismaService) {}

    async getAnswerCount(): Promise<number> {
        return this.prisma.calender.count();
    }
}
