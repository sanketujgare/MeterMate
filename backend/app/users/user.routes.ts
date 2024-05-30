import { Router } from "express";
import { Route } from "../routes/routes.types";
import userService from "./user.service";
import { responseHandler } from "../utility/responceHandeler";
import {
  assignMeterValidations,
  getUsersValidations,
  userValidations,
} from "./user.validations";

import { createBoardValidations } from "../boards/board.validations";
import { authPermissions } from "../utility/auth-permissions";

import {
  permissionsToAssignMeter,
  permissionsToCreate,
  permissionsToDeleteUser,
  permissionsToViewAllCustomers,
  permissionsToViewDeleted,
  permissionsToViewUser,
  permissionsToCreateBoard,
} from "../utility/pemissions";
import { Types } from "mongoose";

const userRouter = Router();

userRouter.post(
  "/create-user",
  authPermissions(permissionsToCreate),
  ...userValidations, // VARIFIED
  async (req, res, next) => {
    try {
      const result = await userService.createUser(req.body);
      res.send(new responseHandler(result));
    } catch (e) {
      next(e);
    }
  }
);

userRouter.get(
  "get-user",
  authPermissions(permissionsToViewUser),
  (req, res, next) => {
    try {
    } catch (e) {
      next(e);
    }
  }
);

userRouter.get(
  "/getall-customers/:boardid",
  authPermissions(permissionsToViewAllCustomers),
  ...getUsersValidations, //VARIFIED
  async (req, res, next) => {
    try {
      const boardId = req.params.boardid;
      const result = await userService.getAllCustomers(boardId);
      res.send(new responseHandler(result));
    } catch (e) {
      next(e);
    }
  }
);

userRouter.delete(
  "/delete-user/:userid",
  authPermissions(permissionsToDeleteUser),
  async (req, res, next) => {
    try {
      const boardId = req.currentUser.boardId;
      const result = await userService.deleteUser(req.params.userid, boardId);
      res.send(new responseHandler(result));
    } catch (e) {
      next(e);
    }
  }
);

userRouter.get(
  "/get-deleted",
  authPermissions(permissionsToViewDeleted),
  async (req, res, next) => {
    try {
      const result = await userService.getDeltedCustomers(
        req.currentUser.boardId
      );

      res.send(new responseHandler(result));
    } catch (e) {
      next(e);
    }
  }
);

userRouter.put("/update-user", async (req, res, next) => {
  try {
  } catch (e) {
    next(e);
  }
});

userRouter.put(
  "/assign-meter",
  authPermissions(permissionsToAssignMeter),
  ...assignMeterValidations, // VARIFIED
  async (req, res, next) => {
    try {
      const result = await userService.assignMeter(
        req.body.userId,
        req.body.serviceId
      );
      res.send(new responseHandler(result));
    } catch (e) {
      next(e);
    }
  }
);

userRouter.post(
  "/create-board",
  authPermissions(permissionsToCreateBoard),
  ...createBoardValidations,
  async (req, res, next) => {
    try {
      const result = await userService.createBoard(req.body);
      res.send(new responseHandler(result));
    } catch (e) {
      next(e);
    }
  }
);

export default new Route("/user", userRouter);
