import {EnumAuthStatusCodeError} from "../auth";
import {EnumInternalStatusCodeError} from "../error";
import {EnumRequestStatusCodeError} from "../request";
import {EnumUserStatusCodeError, EnumUserProfileStatusCodeError} from "../user";
import {EnumTrainingStatusCodeError} from "../training";

export const ErrorStatusCodeMap = {
  ...EnumRequestStatusCodeError,
  ...EnumInternalStatusCodeError,
  ...EnumAuthStatusCodeError,
  ...EnumUserStatusCodeError,
  ...EnumTrainingStatusCodeError,
  ...EnumUserProfileStatusCodeError,

  // CHECK NEXT STATUS CODE ERROR NUMBER HERE (leave ~100 gap/buffer)
};

export type ErrorStatusCodeType = keyof typeof ErrorStatusCodeMap;