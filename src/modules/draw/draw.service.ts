import { Injectable } from '@nestjs/common';
import { DrawRepository } from './repository/draw.repository';
import { GetDrawResponse } from './dto/response/get.draw.response';
import { DrawEntity } from './entities/draw.entity';

@Injectable()
export class DrawService {
    constructor(private readonly drawRepository: DrawRepository) {}

    async getAllDraws(): Promise<GetDrawResponse[]> {
        const draws = await this.drawRepository.getAllDraws();
        return draws.map((draw) => new GetDrawResponse(draw));
    }

    async executeDraw(): Promise<DrawEntity> {
        // 개발용 임시 랜덤 추첨
        return this.drawRepository.executeDraw();
    }
}
