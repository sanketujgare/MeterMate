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
  permissionsToViewAllCustomers,
  permissionsToViewDeleted,
  permissionsToViewUser,
  permissionsToCreateBoard,
  permissionsToDeleteCustomer,
  permissionsToDeleteEmployee,
  permissionsTODeleteBoardMember,
} from "../utility/pemissions";

const userRouter = Router();

userRouter.post(
  "/create-user",
  authPermissions(permissionsToCreate),
  ...userValidations,
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
  "get-user/:userid",
  authPermissions(permissionsToViewUser),
  (req, res, next) => {
    try {
      const userId = req.params.userid;
      // const result =
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
  "/delete-customer/:userid",
  authPermissions(permissionsToDeleteCustomer),
  async (req, res, next) => {
    try {
      const boardId = req.currentUser.boardId;
      const result = await userService.deleteCustomer(
        req.params.userid,
        boardId
      );
      res.send(new responseHandler(result));
    } catch (e) {
      next(e);
    }
  }
);
userRouter.delete(
  "/delete-board-member/:userid",
  authPermissions(permissionsTODeleteBoardMember),
  async (req, res, next) => {
    try {
      const boardId = req.currentUser.boardId;
      const result = await userService.deleteCustomer(
        req.params.userid,
        boardId
      );
      res.send(new responseHandler(result));
    } catch (e) {
      next(e);
    }
  }
);
userRouter.delete(
  "/delete-employee/:userid",
  authPermissions(permissionsToDeleteEmployee),
  async (req, res, next) => {
    try {
      const boardId = req.currentUser.boardId;
      const result = await userService.deleteCustomer(
        req.params.userid,
        boardId
      );
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
