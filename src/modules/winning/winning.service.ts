import { Injectable } from '@nestjs/common';
import { WinningRepository } from './repository/winning.repository';

@Injectable()
export class WinningService {
    constructor(private readonly winningRepository: WinningRepository) {}
}
