export declare enum EnumPaginationSortType {
    Asc = "ASC",
    Desc = "DESC"
}
export type IPaginationSort = Record<string, EnumPaginationSortType>;
export interface IPaginationList {
    search?: string;
    page: number;
    perPage: number;
    sort: IPaginationSort;
    availableSearch: string[];
    availableSort: string[];
}
