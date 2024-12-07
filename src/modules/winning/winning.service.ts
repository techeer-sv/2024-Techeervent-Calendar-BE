import { Injectable } from '@nestjs/common';
import { WinningRepository } from './repository/winning.repository';
import { GetWinningResponse } from './dto/response/get.winning.response';

@Injectable()
export class WinningService {
    constructor(private readonly winningRepository: WinningRepository) {}

    async getAllWinnings(): Promise<GetWinningResponse[]> {
        const winnings = await this.winningRepository.getAllWinnings();
        return winnings.map((winning) => new GetWinningResponse(winning));
    }
}
