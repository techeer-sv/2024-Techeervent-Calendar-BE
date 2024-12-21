import { User } from '@prisma/client';

export class UserEntity implements User {
    userId: number;
    hashedUserId: string;
    userName: string;
    userYear: number;
    createdAt: Date;
}
