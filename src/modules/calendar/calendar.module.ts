import { Module } from '@nestjs/common';
import { CalendarService } from './calendar.service';
import { CalendarController } from './calendar.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { CalendarRepository } from './repository/calendar.repository';

@Module({
    imports: [PrismaModule],
    controllers: [CalendarController],
    providers: [CalendarService, CalendarRepository],
})
export class CalendarModule {}
