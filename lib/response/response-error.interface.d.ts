import { IMessage } from './response.interface';
export interface IErrors {
    readonly message: string | IMessage;
    readonly property: string;
}
export interface IErrorHttpMetadata {
    languages?: string[];
    timestamp: number;
    timezone: string;
    path: string;
    version: string;
    repoVersion: string;
    [key: string]: any;
}
export interface IResponseError {
    statusCode: number;
    message: string | IMessage;
    meta: IErrorHttpMetadata;
    error?: string;
    errors?: IErrors[];
    data?: Record<string, any>;
}
