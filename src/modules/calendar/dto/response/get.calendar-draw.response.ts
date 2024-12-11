import { CalendarEntity } from '../../entities/calendar.entity';

export class GetCalendarDrawResponse {
    readonly isWon: boolean;
    readonly draw: { drawName: string; drawTotal: number } | null;

    constructor(calendarEntity: CalendarEntity) {
        this.isWon = !!calendarEntity.draw;
        this.draw = calendarEntity.draw
            ? {
                  drawName: calendarEntity.draw.drawName,
                  drawTotal: calendarEntity.draw.drawTotal,
              }
            : null;
    }
}
