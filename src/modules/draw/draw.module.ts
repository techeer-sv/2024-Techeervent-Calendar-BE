import { forwardRef, Module } from '@nestjs/common';
import { DrawService } from './draw.service';
import { DrawController } from './draw.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { DrawRepository } from './repository/draw.repository';
import { CalendarModule } from '../calendar/calendar.module';

@Module({
    imports: [PrismaModule, forwardRef(() => CalendarModule)],
    controllers: [DrawController],
    providers: [DrawService, DrawRepository],
    exports: [DrawService],
})
export class DrawModule {}
