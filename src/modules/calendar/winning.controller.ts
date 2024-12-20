import { Controller, Get, HttpStatus } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CalendarService } from './calendar.service';
import { ResultResponse } from '../../global/response/result-response';
import { GetWinningResponse } from './dto/response/get.winning.response';

@ApiTags('Winning')
@Controller('winning')
export class WinningController {
    constructor(private readonly calendarService: CalendarService) {}

    @Get()
    @ApiOperation({
        summary: '당첨 목록 조회',
        description: '전체 당첨 내역을 조회합니다.',
    })
    async getAllWinnings(): Promise<ResultResponse<GetWinningResponse[]>> {
        const winnings = await this.calendarService.getAllWinnings();
        return new ResultResponse(
            HttpStatus.OK,
            '전체 당첨 내역을 조회했습니다.',
            winnings,
        );
    }
}
