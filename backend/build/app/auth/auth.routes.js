"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routes_types_1 = require("../routes/routes.types");
const authRouter = (0, express_1.Router)();
authRouter.post("/login", (req, res, next) => {
    try {
    }
    catch (e) { }
});
exports.default = new routes_types_1.Route("/auth", authRouter);
