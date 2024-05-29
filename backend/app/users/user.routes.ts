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

const userRouter = Router();

userRouter.post(
  "/create",
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

userRouter.get("getUser", (req, res, next) => {
  try {
  } catch (e) {
    next(e);
  }
});

userRouter.get(
  "/getall-customers/:boardid",
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

userRouter.delete("/delete-user", async (req, res, next) => {
  try {
    const result = await userService.deleteUser(req.body.userIdsToUpdate);
    res.send(new responseHandler(result));
  } catch (e) {
    next(e);
  }
});

userRouter.get("/get-deleted", async (req, res, next) => {
  try {
    const result = await userService.getDeltedCustomers(req.body.boardId);
    res.send(new responseHandler(result));
  } catch (e) {
    next(e);
  }
});

userRouter.put("/update-user", async (req, res, next) => {
  try {
  } catch (e) {
    next(e);
  }
});

userRouter.put(
  "/assign-meter",
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
