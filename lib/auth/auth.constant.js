"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumAuthStatusCodeError = void 0;
var EnumAuthStatusCodeError;
(function (EnumAuthStatusCodeError) {
    EnumAuthStatusCodeError[EnumAuthStatusCodeError["AuthInvalidEmailError"] = 2000] = "AuthInvalidEmailError";
    EnumAuthStatusCodeError[EnumAuthStatusCodeError["AuthWrongCredentialsError"] = 2001] = "AuthWrongCredentialsError";
    EnumAuthStatusCodeError[EnumAuthStatusCodeError["AuthBadRequestError"] = 2002] = "AuthBadRequestError";
    EnumAuthStatusCodeError[EnumAuthStatusCodeError["AuthGuardJwtAccessTokenError"] = 2003] = "AuthGuardJwtAccessTokenError";
    EnumAuthStatusCodeError[EnumAuthStatusCodeError["AuthGuardJwtAccessTokenExpiredError"] = 2004] = "AuthGuardJwtAccessTokenExpiredError";
    EnumAuthStatusCodeError[EnumAuthStatusCodeError["AuthGuardJwtRefreshTokenError"] = 2005] = "AuthGuardJwtRefreshTokenError";
    EnumAuthStatusCodeError[EnumAuthStatusCodeError["AuthGuardPasswordExpiredError"] = 2006] = "AuthGuardPasswordExpiredError";
    EnumAuthStatusCodeError[EnumAuthStatusCodeError["AuthPasswordExpiredError"] = 2007] = "AuthPasswordExpiredError";
    EnumAuthStatusCodeError[EnumAuthStatusCodeError["AuthPasswordNotMatchError"] = 2008] = "AuthPasswordNotMatchError";
    EnumAuthStatusCodeError[EnumAuthStatusCodeError["AuthPasswordNewMustDifferenceError"] = 2009] = "AuthPasswordNewMustDifferenceError";
    EnumAuthStatusCodeError[EnumAuthStatusCodeError["AuthResetPasswordLinkExpired"] = 2010] = "AuthResetPasswordLinkExpired";
    EnumAuthStatusCodeError[EnumAuthStatusCodeError["AuthEmailExist"] = 2011] = "AuthEmailExist";
    EnumAuthStatusCodeError[EnumAuthStatusCodeError["AuthUsernameExist"] = 2012] = "AuthUsernameExist";
})(EnumAuthStatusCodeError || (exports.EnumAuthStatusCodeError = EnumAuthStatusCodeError = {}));
//# sourceMappingURL=auth.constant.js.map