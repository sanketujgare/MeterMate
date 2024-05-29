"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authPermissions = void 0;
const auth_types_1 = require("../auth/auth.types");
const authPermissions = (requiredPermissions) => (req, res, next) => {
    try {
        const userRoles = req.body.role;
        for (let role of auth_types_1.roles) {
            if (auth_types_1.permissions[role]) {
                const rolePermissions = auth_types_1.permissions[role];
                console.log(rolePermissions);
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
            message: "FROBIDDEN",
        });
    }
};
exports.authPermissions = authPermissions;
