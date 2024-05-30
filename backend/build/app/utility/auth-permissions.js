"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authPermissions = void 0;
const pemissions_1 = require("../utility/pemissions");
const authPermissions = (requiredPermissions) => (req, res, next) => {
    try {
        const userRoles = req.currentUser.role;
        for (let role of userRoles) {
            if (pemissions_1.permissions[role]) {
                const rolePermissions = pemissions_1.permissions[role];
                for (let permission of rolePermissions) {
                    if (requiredPermissions.includes(permission)) {
                        next();
                    }
                }
            }
        }
    }
    catch (e) {
        next({
            statusCode: 403,
            message: "ACCESS DENIED",
        });
    }
};
exports.authPermissions = authPermissions;
