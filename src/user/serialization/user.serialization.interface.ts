import { EnumUserProfilePosition } from '../profile';
export interface IUserBaseSerialization {
  id: string;
  username: string;
  email: string;
  fullName: string;
  isActive: boolean;
}

export interface IProfileSerialization {
  birthDate?: Date;
  avatar?: string;
  bio?: string;
  height?: number;
  weight?: number;
  position?: EnumUserProfilePosition;
}

export interface IUserWithProfileSerialization extends IUserBaseSerialization {
  profile: IProfileSerialization;
}
