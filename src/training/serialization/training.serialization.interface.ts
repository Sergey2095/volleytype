import {IUserBaseSerialization} from "src/user";

export interface ITrainingSerialization {
  id: string;
  title: string;
  description: string;
  location: string;
  image: string;
  participants: IUserBaseSerialization[];
  creator: IUserBaseSerialization;
  startDateTime: Date;
  endDateTime: Date;
}

