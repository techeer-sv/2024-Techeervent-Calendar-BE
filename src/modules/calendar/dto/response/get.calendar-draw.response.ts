import { CalendarEntity } from '../../entities/calendar.entity';

export class GetCalendarDrawResponse {
    readonly winningId: number;
    readonly user: { userName: string; userYear: number };
    readonly drawName: string;

    constructor(calendarEntity: CalendarEntity) {
        this.user = {
            userName: calendarEntity.user.userName,
            userYear: calendarEntity.user.userYear,
        };
        this.drawName = calendarEntity.draw.drawName;
    }
}
