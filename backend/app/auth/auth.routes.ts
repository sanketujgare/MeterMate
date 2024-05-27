import { Router } from "express";
import { Route } from "../routes/routes.types";
import authService from "./auth.service";
import { responseHandler } from "../utility/responceHandeler";
const authRouter = Router();

authRouter.post("/login", async (req, res, next) => {
  try {
    try {
      const result = await authService.login(req.body);
      res.send(new responseHandler(result));
    } catch (e) {
      next(e);
    }
  } catch (e) {}
});

export default new Route("/auth", authRouter);
