"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumUserProfileAmplua = exports.EnumUserProfilePosition = exports.EnumUserProfileStatusCodeError = void 0;
var EnumUserProfileStatusCodeError;
(function (EnumUserProfileStatusCodeError) {
    EnumUserProfileStatusCodeError[EnumUserProfileStatusCodeError["UserProfileNotFoundError"] = 2300] = "UserProfileNotFoundError";
    EnumUserProfileStatusCodeError[EnumUserProfileStatusCodeError["UserProfileAlreadyExistError"] = 2301] = "UserProfileAlreadyExistError";
})(EnumUserProfileStatusCodeError || (exports.EnumUserProfileStatusCodeError = EnumUserProfileStatusCodeError = {}));
var EnumUserProfilePosition;
(function (EnumUserProfilePosition) {
    EnumUserProfilePosition["left"] = "left";
    EnumUserProfilePosition["right"] = "right";
    EnumUserProfilePosition["universal"] = "universal";
})(EnumUserProfilePosition || (exports.EnumUserProfilePosition = EnumUserProfilePosition = {}));
var EnumUserProfileAmplua;
(function (EnumUserProfileAmplua) {
    EnumUserProfileAmplua["blocker"] = "blocker";
    EnumUserProfileAmplua["defender"] = "defender";
    EnumUserProfileAmplua["universal"] = "universal";
})(EnumUserProfileAmplua || (exports.EnumUserProfileAmplua = EnumUserProfileAmplua = {}));
//# sourceMappingURL=user-profile.constant.js.map