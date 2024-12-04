import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class AnswerRepository {
    constructor(private readonly prisma: PrismaService) {}

    async getAnswerCount(): Promise<number> {
        return this.prisma.answer.count();
    }
}
