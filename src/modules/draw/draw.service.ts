import { Injectable } from '@nestjs/common';
import { DrawRepository } from './repository/draw.repository';
import { DrawEntity } from './entities/draw.entity';
import { CalendarRepository } from '../calendar/repository/calendar.repository';

@Injectable()
export class DrawService {
    constructor(
        private readonly drawRepository: DrawRepository,
        private readonly calendarRepository: CalendarRepository,
    ) {}

    async executeDraw(date: number): Promise<DrawEntity | null> {
        const drawOdds = parseFloat(process.env.ODDS_OF_WINNING);
        const count = await this.calendarRepository.getTodayWinningsCount(date);
        const isWinner = Math.random() < drawOdds;
        if (isWinner && count < 4) {
            return await this.drawRepository.executeDrawLock();
        }
        return null;
    }
}
