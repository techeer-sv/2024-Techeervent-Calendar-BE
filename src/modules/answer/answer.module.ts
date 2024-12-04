import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { AnswerService } from './answer.service';
import { AnswerController } from './answer.controller';
import { AnswerRepository } from './repository/answer.repository';

@Module({
    imports: [PrismaModule],
    controllers: [AnswerController],
    providers: [AnswerService, AnswerRepository],
})
export class AnswerModule {}
