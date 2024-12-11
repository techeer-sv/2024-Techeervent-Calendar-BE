import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DrawModule } from './modules/draw/draw.module';
import { QuestionModule } from './modules/question/question.module';
import { UserModule } from './modules/user/user.module';
import { CalendarModule } from './modules/calendar/calendar.module';

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        CalendarModule,
        DrawModule,
        QuestionModule,
        UserModule,
    ],
})
export class AppModule {}
