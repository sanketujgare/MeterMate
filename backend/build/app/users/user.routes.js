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
const express_1 = require("express");
const routes_types_1 = require("../routes/routes.types");
const user_service_1 = __importDefault(require("./user.service"));
const responceHandeler_1 = require("../utility/responceHandeler");
const user_validations_1 = require("./user.validations");
const board_validations_1 = require("../boards/board.validations");
const userRouter = (0, express_1.Router)();
userRouter.post("/create", ...user_validations_1.userValidations, // VARIFIED
(req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_service_1.default.createUser(req.body);
        res.send(new responceHandeler_1.responseHandler(result));
    }
    catch (e) {
        next(e);
    }
}));
userRouter.get("getUser", (req, res, next) => {
    try {
    }
    catch (e) {
        next(e);
    }
});
userRouter.get("/getall-customers/:boardid", ...user_validations_1.getUsersValidations, //VARIFIED
(req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const boardId = req.params.boardid;
        const result = yield user_service_1.default.getAllCustomers(boardId);
        res.send(new responceHandeler_1.responseHandler(result));
    }
    catch (e) {
        next(e);
    }
}));
userRouter.delete("/delete-user", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_service_1.default.deleteUser(req.body.userIdsToUpdate);
        res.send(new responceHandeler_1.responseHandler(result));
    }
    catch (e) {
        next(e);
    }
}));
userRouter.get("/get-deleted", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_service_1.default.getDeltedCustomers(req.body.boardId);
        res.send(new responceHandeler_1.responseHandler(result));
    }
    catch (e) {
        next(e);
    }
}));
userRouter.put("/update-user", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (e) {
        next(e);
    }
}));
userRouter.put("/assign-meter", ...user_validations_1.assignMeterValidations, // VARIFIED
(req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_service_1.default.assignMeter(req.body.userId, req.body.serviceId);
        res.send(new responceHandeler_1.responseHandler(result));
    }
    catch (e) {
        next(e);
    }
}));
userRouter.post("/create-board", ...board_validations_1.createBoardValidations, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_service_1.default.createBoard(req.body);
        res.send(new responceHandeler_1.responseHandler(result));
    }
    catch (e) {
        next(e);
    }
}));
exports.default = new routes_types_1.Route("/user", userRouter);
