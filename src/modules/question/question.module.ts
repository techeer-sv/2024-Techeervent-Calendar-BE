import { Global, Module } from '@nestjs/common';
import { QuestionService } from './question.service';
import { QuestionController } from './question.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { QuestionRepository } from './repository/question.repository';

@Global()
@Module({
    imports: [PrismaModule],
    controllers: [QuestionController],
    providers: [QuestionService, QuestionRepository],
    exports: [QuestionRepository],
})
export class QuestionModule {}
