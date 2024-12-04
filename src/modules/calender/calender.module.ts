import { Module } from '@nestjs/common';
import { CalenderService } from './calender.service';
import { CalenderController } from './calender.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { CalenderRepository } from './repository/calender.repository';

@Module({
    imports: [PrismaModule],
    controllers: [CalenderController],
    providers: [CalenderService, CalenderRepository],
})
export class CalenderModule {}
