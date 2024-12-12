export class GetDrawResponse {
    readonly drawName: string | null;

    constructor(drawName?: string) {
        this.drawName = drawName ?? null;
    }
}
