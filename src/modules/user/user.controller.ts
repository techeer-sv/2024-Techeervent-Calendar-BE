import { Controller, Get, HttpStatus, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiOperation } from '@nestjs/swagger';
import { ResultResponse } from '../../global/response/result-response';
import { GetUserResponse } from './dto/response/get.user.response';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    @ApiOperation({
        summary: '유저 검색',
        description:
            '이름으로 유저를 검색합니다. 기수 기준 오름차순으로 정렬됩니다.',
    })
    async getUsers(
        @Query('userName') userName: string,
    ): Promise<ResultResponse<GetUserResponse[]>> {
        const users = await this.userService.getUsers(userName);
        return new ResultResponse(
            HttpStatus.OK,
            '유저를 검색 했습니다.',
            users,
        );
    }
}
