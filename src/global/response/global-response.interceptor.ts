import {
    Injectable,
    NestInterceptor,
    ExecutionContext,
    CallHandler,
    HttpStatus,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ResultResponse } from './result-response';

@Injectable()
export class GlobalResponseInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const ctx = context.switchToHttp();
        const response = ctx.getResponse();

        return next.handle().pipe(
            map((data) => {
                // 상태 코드 가져오기 (기본값은 200)
                const statusCode = response.statusCode || HttpStatus.OK;

                // message와 data 처리
                return new ResultResponse(
                    statusCode,
                    data?.message || '요청이 성공적으로 처리되었습니다.',
                    data?.data || data,
                );
            }),
        );
    }
}
