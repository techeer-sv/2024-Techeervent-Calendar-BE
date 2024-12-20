import { CalendarEntity } from '../../entities/calendar.entity';

export class GetCalendarResponse {
    readonly calendarDate: number;
    readonly qa: { question: string; answer: string };
    readonly drawName?: string | null;

    constructor(calendarEntity: CalendarEntity) {
        this.calendarDate = calendarEntity.calendarDate;
        this.qa = {
            question: calendarEntity.question.questionContent,
            answer: calendarEntity.calendarAnswer,
        };
        this.drawName = calendarEntity.draw?.drawName ?? null;
    }
}
