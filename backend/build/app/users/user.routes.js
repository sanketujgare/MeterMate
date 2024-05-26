"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routes_types_1 = require("../routes/routes.types");
const userRouter = (0, express_1.Router)();
userRouter.get("/getall", (req, res, next) => {
    try {
    }
    catch (e) {
        next(e);
    }
});
userRouter.get("getUser", (req, res, next) => {
    try {
    }
    catch (e) {
        next(e);
    }
});
userRouter.post("/uploadreading", (req, res, next) => {
    try {
    }
    catch (e) {
        next(e);
    }
});
userRouter;
exports.default = new routes_types_1.Route("/user", userRouter);
