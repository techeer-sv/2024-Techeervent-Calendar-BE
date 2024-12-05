import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CalenderEntity } from '../entities/calender.entity';
import { GetAnswerRequest } from '../dto/request/get.answer.request';

@Injectable()
export class CalenderRepository {
    constructor(private readonly prisma: PrismaService) {}

    async getUserCalender(userId: number): Promise<CalenderEntity[]> {
        return this.prisma.calender.findMany({
            where: { userId },
            include: {
                user: true,
                question: true,
                winning: {
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

    async getAllAnswers(request: GetAnswerRequest): Promise<CalenderEntity[]> {
        const { offset, limit, author } = request;
        return this.prisma.calender.findMany({
            where: {
                ...(author
                    ? {
                          user: {
                              userName: {
                                  contains: author, // author가 포함된 userName 검색
                              },
                          },
                      }
                    : {}),
            },
            include: {
                user: true,
                question: true,
                winning: {
                    include: {
                        draw: true,
                        user: true,
                    },
                },
            },
            orderBy: {
                calenderDate: 'asc',
            },
            skip: offset || 0,
            take: limit || 10,
        });
    }

    async getAnswerCount(): Promise<number> {
        return this.prisma.calender.count();
    }
}
