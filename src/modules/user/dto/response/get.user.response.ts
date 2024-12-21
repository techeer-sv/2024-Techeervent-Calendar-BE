import { UserEntity } from '../../entities/user.entity';

export class GetUserResponse {
    readonly userId: string;
    readonly userName: string;
    readonly userYear: number;

    constructor(userEntity: UserEntity) {
        this.userId = userEntity.hashedUserId;
        this.userName = userEntity.userName;
        this.userYear = userEntity.userYear;
    }
}
