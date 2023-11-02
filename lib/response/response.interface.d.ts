export interface IResponseBase {
    statusCode: number;
    message: string | Record<string, string>;
}
export interface IResponsePagingMetadata {
    totalData: number;
    totalPage?: number;
    currentPage?: number;
    perPage?: number;
    availableSearch?: string[];
    availableSort?: string[];
    [key: string]: any;
}
export interface IResponsePaging<T = any> extends IResponseBase {
    metadata: IResponsePagingMetadata;
    results: T[];
}
export interface IResponse<T = any> extends IResponseBase {
    metadata?: Record<string, any>;
    result: T;
}
export interface IResponseData {
    [key: string]: any;
}
export interface IResponsePagingData<T = any> {
    totalData: number;
    totalPage?: number;
    currentPage?: number;
    perPage?: number;
    availableSearch?: string[];
    availableSort?: string[];
    data: T[];
    [key: string]: any;
}
export type IMessage = Record<string, string>;
