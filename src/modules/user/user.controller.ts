import { Controller, Get, HttpStatus, Post, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiOperation, ApiQuery } from '@nestjs/swagger';
import { ResultResponse } from '../../global/response/result-response';
import { GetUserResponse } from './dto/response/get.user.response';
import { UserEntity } from './entities/user.entity';

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

    @Post()
    @ApiOperation({
        summary: '유저 생성 [dev]',
        description: '개발 용 유저 생성 API 입니다',
    })
    @ApiQuery({
        name: 'userName',
        type: String,
        required: true,
        description: '유저 이름',
    })
    @ApiQuery({
        name: 'userYear',
        type: Number,
        required: true,
        description: '유저 연도',
    })
    async createUser(
        @Query('userName') userName: string,
        @Query('userYear') userYear: number,
    ): Promise<UserEntity> {
        return await this.userService.createUser(userName, userYear);
    }
}
