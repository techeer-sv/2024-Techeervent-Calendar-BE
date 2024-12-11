import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CalendarEntity } from '../entities/calendar.entity';
import { GetAnswerRequest } from '../dto/request/get.answer.request';

@Injectable()
export class CalendarRepository {
    constructor(private readonly prisma: PrismaService) {}

    async getUserCalendar(userId: number): Promise<CalendarEntity[]> {
        return this.prisma.calendar.findMany({
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
                calendarDate: 'asc',
            },
        });
    }

    async getAllAnswers(request: GetAnswerRequest): Promise<CalendarEntity[]> {
        const { offset, limit, author } = request;
        return this.prisma.calendar.findMany({
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
                calendarDate: 'asc',
            },
            skip: offset || 0,
            take: limit || 10,
        });
    }

    async getAnswerCount(): Promise<number> {
        return this.prisma.calendar.count();
    }
}
