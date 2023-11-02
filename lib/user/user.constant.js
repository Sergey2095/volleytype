"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumUserStatusCodeError = void 0;
var EnumUserStatusCodeError;
(function (EnumUserStatusCodeError) {
    EnumUserStatusCodeError[EnumUserStatusCodeError["UserNotFoundError"] = 2100] = "UserNotFoundError";
    EnumUserStatusCodeError[EnumUserStatusCodeError["UserExistsError"] = 2101] = "UserExistsError";
    EnumUserStatusCodeError[EnumUserStatusCodeError["UserInactiveError"] = 2102] = "UserInactiveError";
    EnumUserStatusCodeError[EnumUserStatusCodeError["UserEmailExistsError"] = 2103] = "UserEmailExistsError";
    EnumUserStatusCodeError[EnumUserStatusCodeError["UserSignUpLinkNotFound"] = 2104] = "UserSignUpLinkNotFound";
    EnumUserStatusCodeError[EnumUserStatusCodeError["UserSignUpLinkExpired"] = 2105] = "UserSignUpLinkExpired";
    EnumUserStatusCodeError[EnumUserStatusCodeError["UserVerifiedOnlyError"] = 2106] = "UserVerifiedOnlyError";
})(EnumUserStatusCodeError || (exports.EnumUserStatusCodeError = EnumUserStatusCodeError = {}));
//# sourceMappingURL=user.constant.js.map