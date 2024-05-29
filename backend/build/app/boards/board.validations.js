"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBoardValidations = void 0;
const validator_1 = require("../utility/validator");
const board_types_1 = require("./board.types");
exports.createBoardValidations = [(0, validator_1.body)(board_types_1.boardSchema)];
