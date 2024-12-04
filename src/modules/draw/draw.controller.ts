import { Controller, Get } from '@nestjs/common';
import { DrawService } from './draw.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Draw')
@Controller('draw')
export class DrawController {
    constructor(private readonly drawService: DrawService) {}

    @Get()
    @ApiOperation({
        summary: '경품 목록 조회',
        description:
            '제공하는 경품 목록을 조회합니다. 총계가 적은 순으로 조회됩니다.',
    })
    async getAllDraws(): Promise<any> {
        const draws = await this.drawService.getAllDraws();
        return {
            message: '경품 목록을 조회했습니다.',
            data: draws,
        };
    }
}
