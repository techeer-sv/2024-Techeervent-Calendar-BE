import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe, Logger } from '@nestjs/common';
import { PrismaService } from './modules/prisma/prisma.service';
import { GlobalExceptionsFilter } from './global/exception/global-exception.filter';
import { GlobalResponseInterceptor } from './global/response/global-response.interceptor';

async function bootstrap(): Promise<void> {
    const logger = new Logger('Bootstrap');

    try {
        const app = await NestFactory.create(AppModule, {
            cors: {
                origin: true,
                methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
                preflightContinue: false,
                optionsSuccessStatus: 204,
                credentials: true,
            },
        });
        app.setGlobalPrefix('api/v1');

        const options = new DocumentBuilder()
            .setTitle('Techeervent')
            .setDescription('Techeervent의 API 명세입니다.')
            .setVersion('1.0')
            .addTag('User')
            .addTag('Calendar')
            .addTag('Question')
            // .addTag('Draw')
            .addTag('Winning')
            .build();

        const document = SwaggerModule.createDocument(app, options);
        SwaggerModule.setup('api/v1/docs', app, document);

        logger.log('Swagger 모듈 설정이 완료되었습니다.');

        app.useGlobalPipes(
            new ValidationPipe({
                transform: true, // DTO에서 정의한 타입으로 자동 변환
                forbidNonWhitelisted: true, // DTO에 없는 값이 들어오면 예외 발생
            }),
        );
        logger.log('Global validation 파이프가 설정되었습니다.');

        const prismaService = app.get(PrismaService);
        let retries = 5;
        const retryDelay = 5000;

        while (retries) {
            try {
                await prismaService.$connect();
                logger.log('데이터베이스에 성공적으로 연결되었습니다.');
                break;
            } catch (err) {
                retries -= 1;
                logger.warn(
                    `데이터베이스 연결에 실패했습니다. 남은 재시도 횟수: ${retries}`,
                );
                logger.debug(`에러 스택 트레이스: ${err.stack}`);
                if (retries === 0) {
                    logger.error(
                        '모든 재시도가 실패했습니다. 프로세스를 종료합니다.',
                    );
                    process.exit(1);
                }
                await new Promise((res) => setTimeout(res, retryDelay));
            }
        }

        app.useGlobalFilters(new GlobalExceptionsFilter());
        app.useGlobalInterceptors(new GlobalResponseInterceptor());

        await app.listen(8000);
        logger.log('애플리케이션이 포트 8000에서 작동 중입니다.');
    } catch (error) {
        logger.error('애플리케이션 부트스트랩에 실패했습니다.', error.stack);
        process.exit(1);
    }
}
bootstrap();
