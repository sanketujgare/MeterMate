"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBoard = void 0;
const board_repo_1 = __importDefault(require("./board.repo"));
const board_responces_1 = require("./board.responces");
const createBoard = (newBoard) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const isCreated = yield board_repo_1.default.createBoard(newBoard);
        if (!isCreated)
            return board_responces_1.boardResponces.COULD_NOT_CREATE_BOARD;
        return board_responces_1.boardResponces.BOARD_CREATED_SUCCESSFULLY;
    }
    catch (e) {
        throw board_responces_1.boardResponces.COULD_NOT_CREATE_BOARD;
    }
});
exports.createBoard = createBoard;
exports.default = {
    createBoard: exports.createBoard,
};
