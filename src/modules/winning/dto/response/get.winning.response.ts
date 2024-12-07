import { WinningEntity } from '../../entities/winning.entity';

export class GetWinningResponse {
    readonly winningId: number;
    readonly user: { userName: string; userYear: number };
    readonly drawName: string;

    constructor(winningEntity: WinningEntity) {
        this.winningId = winningEntity.winningId;
        this.user = {
            userName: winningEntity.user.userName,
            userYear: winningEntity.user.userYear,
        };
        this.drawName = winningEntity.draw.drawName;
    }
}
