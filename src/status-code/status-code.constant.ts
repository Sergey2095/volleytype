import {EnumAuthStatusCodeError} from "src/auth";
import {EnumInternalStatusCodeError} from "src/error";
import {EnumRequestStatusCodeError} from "src/request";
import {EnumUserStatusCodeError} from "src/user";

export const ErrorStatusCodeMap = {
  ...EnumRequestStatusCodeError,
  ...EnumInternalStatusCodeError,
  ...EnumAuthStatusCodeError,
  ...EnumUserStatusCodeError,

  // CHECK NEXT STATUS CODE ERROR NUMBER HERE (leave ~100 gap/buffer)
};

export type ErrorStatusCodeType = keyof typeof ErrorStatusCodeMap;