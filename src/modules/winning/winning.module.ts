import { Module } from '@nestjs/common';
import { WinningService } from './winning.service';
import { WinningController } from './winning.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { WinningRepository } from './repository/winning.repository';

@Module({
    imports: [PrismaModule],
    controllers: [WinningController],
    providers: [WinningService, WinningRepository],
})
export class WinningModule {}
