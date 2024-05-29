import { authResponces } from "../auth/auth.responses";
import { Request, Response, NextFunction } from "express";
import { permissions, Role, roles } from "../auth/auth.types";

export const authPermissions =
  (requiredPermissions: string[]) =>
  (req: Request, res: Response, next: NewableFunction) => {
    try {
      const userRoles: Role[] = req.body.role;
      for (let role of roles) {
        if (permissions[role]) {
          const rolePermissions = permissions[role];
          console.log(rolePermissions);
          for (let permission of rolePermissions) {
            if (requiredPermissions.includes(permission)) {
              next();
            }
          }
        }
      }
    } catch (e) {
      next({
        statusCode: 403,
        message: "FROBIDDEN",
      });
    }
  };
