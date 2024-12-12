import { CalendarEntity } from '../../entities/calendar.entity';

export class GetWinningResponse {
    readonly user: { userName: string; userYear: number };
    readonly drawName: string;

    constructor(calendarEntity: CalendarEntity) {
        this.user = calendarEntity.draw
            ? {
                  userName: calendarEntity.user.userName,
                  userYear: calendarEntity.user.userYear,
              }
            : null;
        this.drawName = calendarEntity.draw.drawName;
    }
}
