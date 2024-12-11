import { Module } from '@nestjs/common';
import { CalendarService } from './calendar.service';
import { CalendarController } from './calendar.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { CalendarRepository } from './repository/calendar.repository';
import { WinningController } from './winning.controller';
import { DrawModule } from '../draw/draw.module';

@Module({
    imports: [PrismaModule, DrawModule],
    controllers: [CalendarController, WinningController],
    providers: [CalendarService, CalendarRepository],
})
export class CalendarModule {}
