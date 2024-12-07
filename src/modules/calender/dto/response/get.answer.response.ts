import { CalenderEntity } from '../../entities/calender.entity';

export class GetAnswerResponse {
    readonly question: string;
    readonly answer: string;
    readonly user: { userName: string; userYear: number };

    constructor(calenderEntity: CalenderEntity) {
        this.question = calenderEntity.question.questionContent;
        this.answer = calenderEntity.calenderAnswer;
        this.user = {
            userName: calenderEntity.user.userName,
            userYear: calenderEntity.user.userYear,
        };
    }
}
