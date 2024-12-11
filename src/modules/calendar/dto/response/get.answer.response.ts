import { CalendarEntity } from '../../entities/calendar.entity';

export class GetAnswerResponse {
    readonly question: string;
    readonly answer: string;
    readonly user: { userName: string; userYear: number };

    constructor(calendarEntity: CalendarEntity) {
        this.question = calendarEntity.question.questionContent;
        this.answer = calendarEntity.calendarAnswer;
        this.user = {
            userName: calendarEntity.user.userName,
            userYear: calendarEntity.user.userYear,
        };
    }
}
