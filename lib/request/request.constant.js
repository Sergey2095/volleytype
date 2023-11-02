"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumRequestStatusCodeError = void 0;
var EnumRequestStatusCodeError;
(function (EnumRequestStatusCodeError) {
    EnumRequestStatusCodeError[EnumRequestStatusCodeError["RequestValidationError"] = 1000] = "RequestValidationError";
    EnumRequestStatusCodeError[EnumRequestStatusCodeError["RequestTimestampInvalidError"] = 1001] = "RequestTimestampInvalidError";
    EnumRequestStatusCodeError[EnumRequestStatusCodeError["RequestUserAgentInvalidError"] = 1002] = "RequestUserAgentInvalidError";
    EnumRequestStatusCodeError[EnumRequestStatusCodeError["RequestPreconditionFailedError"] = 1003] = "RequestPreconditionFailedError";
})(EnumRequestStatusCodeError || (exports.EnumRequestStatusCodeError = EnumRequestStatusCodeError = {}));
//# sourceMappingURL=request.constant.js.map