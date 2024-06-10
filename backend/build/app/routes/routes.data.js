"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const auth_routes_1 = __importDefault(require("../auth/auth.routes"));
const board_routes_1 = __importDefault(require("../boards/board.routes"));
const user_routes_1 = __importDefault(require("../users/user.routes"));
exports.routes = [auth_routes_1.default, board_routes_1.default, user_routes_1.default];
