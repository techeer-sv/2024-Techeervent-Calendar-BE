import { HttpException, HttpStatus } from '@nestjs/common';

export class NotFoundUserException extends HttpException {
    constructor() {
        super('유저를 찾을 수 없습니다.', HttpStatus.NOT_FOUND);
    }
}
