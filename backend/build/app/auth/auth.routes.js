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
const auth_service_1 = __importDefault(require("./auth.service"));
const responceHandeler_1 = require("../utility/responceHandeler");
const authRouter = (0, express_1.Router)();
authRouter.post("/login", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        try {
            const result = yield auth_service_1.default.login(req.body);
            res.send(new responceHandeler_1.responseHandler(result));
        }
        catch (e) {
            next(e);
        }
    }
    catch (e) { }
}));
authRouter.post("/logout", (req, res, next) => {
    var _a;
    try {
        const token = (_a = req.headers["authorization"]) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
        const result = auth_service_1.default.logout(token || "");
        res.send(new responceHandeler_1.responseHandler(result));
    }
    catch (e) {
        next(e);
    }
});
exports.default = new routes_types_1.Route("/auth", authRouter);
