import { Module } from '@nestjs/common';
import { DrawService } from './draw.service';
import { DrawController } from './draw.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { DrawRepository } from './repository/draw.repository';

@Module({
    imports: [PrismaModule],
    controllers: [DrawController],
    providers: [DrawService, DrawRepository],
    exports: [DrawService],
})
export class DrawModule {}
