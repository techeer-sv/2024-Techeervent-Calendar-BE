import { Injectable } from '@nestjs/common';
import { UserRepository } from './repository/user.repository';
import { GetUserResponse } from './dto/response/get.user.response';

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository) {}

    async getUsers(userName: string): Promise<GetUserResponse[]> {
        const users = await this.userRepository.getUsers(userName);
        return users.map((user) => new GetUserResponse(user));
    }
}
