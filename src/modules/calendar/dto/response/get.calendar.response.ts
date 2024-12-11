import { CalendarEntity } from '../../entities/calendar.entity';

export class GetCalendarResponse {
    readonly calendarId: number;
    readonly calendarDate: number;
    readonly qa: { question: string; answer: string };
    readonly drawName?: string | null;

    constructor(calendarEntity: CalendarEntity) {
        this.calendarId = calendarEntity.calendarId;
        this.calendarDate = calendarEntity.calendarDate;
        this.qa = {
            question: calendarEntity.question.questionContent,
            answer: calendarEntity.calendarAnswer,
        };
        this.drawName = calendarEntity.draw?.drawName ?? null;
    }
}
