import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CalendarService } from './calendar.service';

@ApiTags('Winning')
@Controller('winning')
export class WinningController {
    constructor(private readonly calendarService: CalendarService) {}

    @Get()
    @ApiOperation({
        summary: '당첨 목록 조회',
        description: '전체 당첨 내역을 조회합니다.',
    })
    async getAllWinnings(): Promise<any> {
        const winnings = await this.calendarService.getAllWinnings();
        return {
            message: '전체 당첨 내역을 조회했습니다.',
            data: winnings,
        };
    }
}
