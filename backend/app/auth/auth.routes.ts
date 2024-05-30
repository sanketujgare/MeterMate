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

authRouter.post("/logout", (req, res, next) => {
  try {
    const token = req.headers["authorization"]?.split(" ")[1];
    const result = authService.logout(token || "");
    res.send(new responseHandler(result));
  } catch (e) {
    next(e);
  }
});
export default new Route("/auth", authRouter);
