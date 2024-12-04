import { User } from '@prisma/client';

export class UserEntity implements User {
    userId: number;
    userName: string;
    userYear: number;
    createdAt: Date;
}
