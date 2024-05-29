"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assignMeterValidations = exports.getUsersValidations = exports.userValidations = void 0;
const validator_1 = require("../utility/validator");
const user_types_1 = require("./user.types");
exports.userValidations = [(0, validator_1.body)(user_types_1.userSchema)];
exports.getUsersValidations = [(0, validator_1.params)(user_types_1.boardId)];
exports.assignMeterValidations = [(0, validator_1.body)(user_types_1.assignMeterSchema)];
