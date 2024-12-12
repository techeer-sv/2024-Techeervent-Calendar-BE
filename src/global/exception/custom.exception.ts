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
