import { Controller } from '@nestjs/common';
import { WinningService } from './winning.service';

@Controller('winning')
export class WinningController {
    constructor(private readonly winningService: WinningService) {}
}
