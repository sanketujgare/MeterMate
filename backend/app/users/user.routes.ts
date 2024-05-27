import { Router } from "express";
import { Route } from "../routes/routes.types";
import userService from "./user.service";
import { responseHandler } from "../utility/responceHandeler";
import multer from "multer";

const userRouter = Router();

userRouter.post("/create", async (req, res, next) => {
  try {
    const result = await userService.createUser(req.body);
    res.send(new responseHandler(result));
  } catch (e) {
    next(e);
  }
});

userRouter.post("/bulk-upload", (req, res, next) => {});
userRouter.get("getUser", (req, res, next) => {
  try {
  } catch (e) {
    next(e);
  }
});

userRouter.get("/getall-customers", async (req, res, next) => {
  try {
    const result = await userService.getAllCustomers();
    res.send(new responseHandler(result));
  } catch (e) {
    next(e);
  }
});
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
  } catch (e) {}
});

export default new Route("/user", userRouter);
