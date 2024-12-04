import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AnswerModule } from './modules/answer/answer.module';
import { DrawModule } from './modules/draw/draw.module';
import { QuestionModule } from './modules/question/question.module';
import { UserModule } from './modules/user/user.module';
import { WinningModule } from './modules/winning/winning.module';
import { CalenderModule } from './modules/calender/calender.module';

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        AnswerModule,
        CalenderModule,
        DrawModule,
        QuestionModule,
        UserModule,
        WinningModule,
    ],
})
export class AppModule {}
