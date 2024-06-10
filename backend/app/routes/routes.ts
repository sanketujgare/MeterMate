import { Application, NextFunction, json, Request, Response } from "express";
import cors from "cors";
import { routes } from "./routes.data";
import { responseHandler } from "../utility/responceHandeler";
import { excludedRoutes, validateToken } from "../utility/validate-token";

export const registerMiddlewares = (app: Application) => {
  app.use(json());
  app.use(cors());

  app.use(validateToken(excludedRoutes));

  for (let route of routes) {
    app.use(route.path, route.router);
  }

  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    res.status(err.statusCode || 500).send(new responseHandler(null, err));
  });
};
