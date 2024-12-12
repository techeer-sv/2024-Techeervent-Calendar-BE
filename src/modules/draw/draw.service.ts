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

    async executeDraw(date: number): Promise<DrawEntity> {
        const count = await this.calendarRepository.getTodayWinningsCount(date);
        const isWinner = Math.random() < 0.8;
        if (isWinner && count < 4) {
            const draws: DrawEntity[] =
                await this.drawRepository.getAllDrawsLock();
            if (draws.length > 0) {
                const weightedDraws: DrawEntity[] = draws.flatMap((draw) =>
                    Array(draw.drawTotal).fill(draw),
                );
                const selectedDraw: DrawEntity =
                    weightedDraws[
                        Math.floor(Math.random() * weightedDraws.length)
                    ];
                await this.drawRepository.decrementDraw(selectedDraw.drawId);
                return selectedDraw;
            }
        }
        return null;
    }
}
