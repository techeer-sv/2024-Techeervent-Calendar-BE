import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
    HttpStatus,
    Logger,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class GlobalExceptionsFilter implements ExceptionFilter {
    private readonly logger = new Logger('GlobalExceptionsFilter');

    catch(exception: unknown, host: ArgumentsHost): void {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();

        const status =
            exception instanceof HttpException
                ? exception.getStatus()
                : HttpStatus.INTERNAL_SERVER_ERROR;

        let message: string | string[] = '알 수 없는 오류가 발생했습니다.';

        if (exception instanceof HttpException) {
            const exceptionResponse = exception.getResponse();
            // 메시지가 문자열 또는 객체인 경우 처리
            if (typeof exceptionResponse === 'string') {
                message = exceptionResponse;
            } else if (
                typeof exceptionResponse === 'object' &&
                exceptionResponse.hasOwnProperty('message')
            ) {
                message = (exceptionResponse as any).message;
            }

            // 상세 정보 로그 출력
            this.logger.error({
                status,
                exceptionName: exception.constructor.name,
                message,
                path: request.url,
                method: request.method,
                stack: (exception as Error).stack,
            });
        } else if (status === HttpStatus.INTERNAL_SERVER_ERROR) {
            message =
                '서버에서 오류가 발생했습니다. 잠시 후 다시 시도해주세요.';
            this.logger.error(exception);
        }

        // 응답 형식 설정
        response.status(status).json({
            statusCode: status,
            timestamp: new Date().toISOString(),
            path: request.url,
            message,
        });
    }
}
