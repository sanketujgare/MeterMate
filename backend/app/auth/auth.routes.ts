import { Router } from "express";
import { Route } from "../routes/routes.types";
const authRouter = Router();

authRouter.post("/login", (req, res, next) => {
  try {
  } catch (e) {}
});

export default new Route("/auth", authRouter);
