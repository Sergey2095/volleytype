"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumTrainingInviteStatus = exports.EnumTrainingStatusCodeError = void 0;
var EnumTrainingStatusCodeError;
(function (EnumTrainingStatusCodeError) {
    EnumTrainingStatusCodeError[EnumTrainingStatusCodeError["TrainingNotFoundError"] = 2200] = "TrainingNotFoundError";
    EnumTrainingStatusCodeError[EnumTrainingStatusCodeError["TrainingInviteNotFoundError"] = 2201] = "TrainingInviteNotFoundError";
})(EnumTrainingStatusCodeError || (exports.EnumTrainingStatusCodeError = EnumTrainingStatusCodeError = {}));
var EnumTrainingInviteStatus;
(function (EnumTrainingInviteStatus) {
    EnumTrainingInviteStatus["Accepted"] = "accepted";
    EnumTrainingInviteStatus["Rejected"] = "rejected";
    EnumTrainingInviteStatus["Pending"] = "pending";
    EnumTrainingInviteStatus["Canceled"] = "canceled";
})(EnumTrainingInviteStatus || (exports.EnumTrainingInviteStatus = EnumTrainingInviteStatus = {}));
//# sourceMappingURL=training.constant.js.map