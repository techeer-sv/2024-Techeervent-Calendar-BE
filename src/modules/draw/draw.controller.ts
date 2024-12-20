import { Controller, HttpStatus } from '@nestjs/common';
import { DrawService } from './draw.service';
// import { ResultResponse } from '../../global/response/result-response';
// import { GetDrawResponse } from './dto/response/get.draw.response';
// import { ApiOperation, ApiTags } from '@nestjs/swagger';

// @ApiTags('Draw')
@Controller('draw')
export class DrawController {
    constructor(private readonly drawService: DrawService) {}

    // @Get()
    // @ApiOperation({
    //     summary: '경품 목록 조회',
    //     description:
    //         '제공하는 경품 목록을 조회합니다. 총계가 적은 순으로 조회됩니다.',
    // })
    // async getAllDraws(): Promise<ResultResponse<GetDrawResponse[]>> {
    //     const draws = await this.drawService.getAllDraws();
    //     return new ResultResponse(
    //         HttpStatus.OK,
    //         '경품 목록을 조회했습니다.',
    //         draws,
    //     );
    // }
}
