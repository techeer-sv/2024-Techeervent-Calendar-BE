import { DrawEntity } from '../../entities/draw.entity';

export class GetDrawResponse {
    readonly drawId: number;
    readonly drawName: string;
    readonly drawTotal: number;

    constructor(drawEntity: DrawEntity) {
        this.drawId = drawEntity.drawId;
        this.drawName = drawEntity.drawName;
        this.drawTotal = drawEntity.drawTotal;
    }
}
