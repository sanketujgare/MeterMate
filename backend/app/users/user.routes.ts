import { Router } from "express";
import { Route } from "../routes/routes.types";

const userRouter = Router();

userRouter.get("/getall", (req, res, next) => {
  try {
  } catch (e) {
    next(e);
  }
});
userRouter.get("getUser", (req, res, next) => {
  try {
  } catch (e) {
    next(e);
  }
});

userRouter.post("/uploadreading", (req, res, next) => {
  try {
  } catch (e) {
    next(e);
  }
});
userRouter;

export default new Route("/user", userRouter);
