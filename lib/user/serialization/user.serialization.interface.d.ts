import { EnumUserProfilePosition } from '../profile';
export interface IUserBaseSerialization {
    id: string;
    username: string;
    email: string;
    fullName: string;
    isActive: boolean;
    avatar?: string;
}
export interface IProfileSerialization {
    birthDate?: Date;
    bio?: string;
    height?: number;
    weight?: number;
    position?: EnumUserProfilePosition;
}
export interface IUserWithProfileSerialization extends IUserBaseSerialization {
    profile: IProfileSerialization;
}
