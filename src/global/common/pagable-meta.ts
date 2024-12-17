export class PagableMeta {
    readonly totalItems: number;
    readonly itemCount: number;
    readonly itemsPerPage: number;
    readonly totalPages: number;
    readonly currentPage: number;

    constructor(total: number, count: number, offset: number, limit: number) {
        this.totalItems = total;
        this.itemCount = count;
        this.itemsPerPage = limit;
        this.totalPages = Math.ceil(total / limit);
        this.currentPage = Math.floor(offset / limit) + 1;
    }
}
