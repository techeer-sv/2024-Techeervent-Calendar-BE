import { CalenderEntity } from '../../entities/calender.entity';

export class GetCalenderResponse {
    readonly calenderId: number;
    readonly calenderDate: number;
    readonly qa: { question: string; answer: string };
    readonly drawName?: string | null;

    constructor(calenderEntity: CalenderEntity) {
        this.calenderId = calenderEntity.calenderId;
        this.calenderDate = calenderEntity.calenderDate;
        this.qa = {
            question: calenderEntity.question.questionContent,
            answer: calenderEntity.calenderAnswer,
        };
        this.drawName = calenderEntity.winning?.draw?.drawName ?? null;
    }
}
