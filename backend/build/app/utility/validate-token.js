"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateToken = exports.excludedRoutes = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const path_to_regexp_1 = require("path-to-regexp");
exports.excludedRoutes = [
    {
        path: (0, path_to_regexp_1.match)("/auth/login"),
        method: "POST",
    },
    {
        path: (0, path_to_regexp_1.match)("/auth/signup"),
        method: "POST",
    },
];
const validateToken = (excludedRoutes) => (req, res, next) => {
    var _a;
    try {
        const isExcludedRoute = excludedRoutes.some((r) => r.path(req.path) && r.method === req.method);
        if (isExcludedRoute) {
            return next();
        }
        const token = (_a = req.headers["authorization"]) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
        if (!token) {
            throw new Error("Access Denied. No valid Token.");
        }
        const { JWT_SECRET } = process.env;
        if (!JWT_SECRET) {
            throw new Error("JWT_SECRET is not defined in environment variables.");
        }
        const payload = (0, jsonwebtoken_1.verify)(token, JWT_SECRET);
        req.currentUser = payload;
        //   console.log(req.currentUser);
        next();
    }
    catch (e) {
        next({
            statusCode: 403,
            message: "FORBIDDEN NOT VALID TOKEN",
        });
    }
};
exports.validateToken = validateToken;
