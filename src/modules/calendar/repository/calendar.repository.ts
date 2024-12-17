import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CalendarEntity } from '../entities/calendar.entity';
import { GetAnswerRequest } from '../dto/request/get.answer.request';
import { CreateCalendarRequest } from '../dto/request/create.calendar.request';

@Injectable()
export class CalendarRepository {
    constructor(private readonly prisma: PrismaService) {}

    async createCalendar(
        request: CreateCalendarRequest,
        drawId: number | null,
    ): Promise<CalendarEntity> {
        return this.prisma.calendar.create({
            data: {
                ...request,
                drawId,
            },
            include: {
                user: true,
                question: true,
                draw: true,
            },
        });
    }

    async getTodayWinningsCount(calendarDate: number): Promise<number> {
        return this.prisma.calendar.count({
            where: {
                calendarDate,
                drawId: { not: null },
            },
        });
    }

    async getUserCalendar(userId: number): Promise<CalendarEntity[]> {
        return this.prisma.calendar.findMany({
            where: { userId },
            include: {
                user: true,
                question: true,
                draw: true,
            },
            orderBy: {
                calendarDate: 'asc',
            },
        });
    }

    async existingUserCalendarByDate(
        userId: number,
        calendarDate: number,
    ): Promise<boolean> {
        const exists = await this.prisma.calendar.findFirst({
            where: {
                userId,
                calendarDate,
            },
            select: {
                calendarId: true, // 어떤 필드든 하나만 선택하여 존재 여부만 확인
            },
        });
        return !!exists;
    }

    async getAllAnswers(
        request: GetAnswerRequest,
    ): Promise<{ total: number; items: CalendarEntity[] }> {
        const { offset = 0, limit = 10, author } = request;
        // 전체 레코드 수 조회
        const total = await this.prisma.calendar.count({
            where: {
                ...(author
                    ? {
                          user: {
                              userName: {
                                  contains: author,
                              },
                          },
                      }
                    : {}),
            },
        });
        // 조건에 맞는 데이터 조회
        const answers = await this.prisma.calendar.findMany({
            where: {
                ...(author
                    ? {
                          user: {
                              userName: {
                                  contains: author,
                              },
                          },
                      }
                    : {}),
            },
            include: {
                user: true,
                question: true,
                draw: true,
            },
            orderBy: [
                {
                    calendarDate: 'asc',
                },
                {
                    createdAt: 'asc',
                },
            ],
            skip: offset,
            take: limit,
        });
        return {
            total,
            items: answers,
        };
    }

    async getAnswerCount(): Promise<number> {
        return this.prisma.calendar.count();
    }

    async getAllWinnings(): Promise<CalendarEntity[]> {
        return this.prisma.calendar.findMany({
            where: {
                drawId: {
                    not: null,
                },
            },
            include: {
                user: true,
                question: true,
                draw: true,
            },
            orderBy: {
                calendarDate: 'asc',
            },
        });
    }
}
