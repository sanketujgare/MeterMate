import { Router } from "express";
import { Route } from "../routes/routes.types";

const boardRouter = Router();

export default new Route("/board", boardRouter);
