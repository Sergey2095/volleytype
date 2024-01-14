"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorStatusCodeMap = void 0;
const auth_1 = require("../auth");
const error_1 = require("../error");
const request_1 = require("../request");
const user_1 = require("../user");
const training_1 = require("../training");
exports.ErrorStatusCodeMap = {
    ...request_1.EnumRequestStatusCodeError,
    ...error_1.EnumInternalStatusCodeError,
    ...auth_1.EnumAuthStatusCodeError,
    ...user_1.EnumUserStatusCodeError,
    ...training_1.EnumTrainingStatusCodeError,
};
//# sourceMappingURL=status-code.constant.js.map