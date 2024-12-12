import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { UserEntity } from '../entities/user.entity';

@Injectable()
export class UserRepository {
    constructor(private readonly prisma: PrismaService) {}

    async getUsers(userName: string): Promise<UserEntity[]> {
        return this.prisma.user.findMany({
            where: {
                userName: {
                    contains: userName, // 일부 문자열로 검색
                    mode: 'insensitive', // 대소문자 구분 없이 검색
                },
            },
            orderBy: {
                userYear: 'asc', // 기수 기준 오름차순 정렬
            },
        });
    }

    async getUserById(userId: number): Promise<UserEntity> {
        return this.prisma.user.findUnique({ where: { userId } });
    }
}
