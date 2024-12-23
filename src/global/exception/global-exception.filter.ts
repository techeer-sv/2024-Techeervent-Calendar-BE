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
    private readonly logger = new Logger(GlobalExceptionsFilter.name);

    catch(exception: unknown, host: ArgumentsHost): void {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();

        const status =
            exception instanceof HttpException
                ? exception.getStatus()
                : HttpStatus.INTERNAL_SERVER_ERROR;

        let message: string | object;

        if (exception instanceof HttpException) {
            const exceptionResponse = exception.getResponse();

            if (
                status === HttpStatus.BAD_REQUEST &&
                typeof exceptionResponse === 'object' &&
                'message' in exceptionResponse
            ) {
                const errorMessage = (exceptionResponse as any).message;
                message = Array.isArray(errorMessage)
                    ? errorMessage.join(', ') // 메시지가 배열인 경우 처리
                    : errorMessage;
            } else {
                message = exception.message;
            }
        } else {
            message =
                status === HttpStatus.INTERNAL_SERVER_ERROR
                    ? '서버에서 오류가 발생했습니다. 잠시 후 다시 시도해주세요.'
                    : '알 수 없는 오류가 발생했습니다.';
        }

        // 응답 반환
        response.status(status).json({
            statusCode: status,
            timestamp: new Date().toISOString(),
            path: request.url,
            message,
        });

        // 예외 로깅
        this.logger.error(
            `Exception thrown: ${status} - ${
                typeof message === 'string' ? message : JSON.stringify(message)
            }`,
            exception instanceof Error ? exception.stack : '',
        );
    }
}
