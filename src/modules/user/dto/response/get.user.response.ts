import { UserEntity } from '../../entities/user.entity';

export class GetUserResponse {
    readonly userId: number;
    readonly userName: string;
    readonly userYear: number;

    constructor(userEntity: UserEntity) {
        this.userId = userEntity.userId;
        this.userName = userEntity.userName;
        this.userYear = userEntity.userYear;
    }
}
