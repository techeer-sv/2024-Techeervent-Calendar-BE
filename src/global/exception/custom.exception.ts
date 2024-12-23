import { HttpException, HttpStatus } from '@nestjs/common';

export class NotFoundUserException extends HttpException {
    constructor() {
        super('유저를 찾을 수 없습니다.', HttpStatus.NOT_FOUND);
    }
}

export class NotFoundQuestionException extends HttpException {
    constructor() {
        super('질문을 찾을 수 없습니다.', HttpStatus.NOT_FOUND);
    }
}

export class DuplicateCalendarByDate extends HttpException {
    constructor() {
        super('이미 해당 날짜의 데이터가 존재합니다.', HttpStatus.CONFLICT);
    }
}

export class ValidationCalendarDate extends HttpException {
    constructor(clientDate: number, serverDate: number) {
        super(
            `접근할 수 없는 날짜입니다. { 요청한 날짜: ${clientDate}, 서버 날짜: ${serverDate} }`,
            HttpStatus.NOT_ACCEPTABLE,
        );
    }
}

export class NotAcceptableAnswers extends HttpException {
    constructor() {
        super(`접근할 수 없는 날짜입니다.`, HttpStatus.NOT_ACCEPTABLE);
    }
}
