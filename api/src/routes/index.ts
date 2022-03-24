import { Router } from "express";
import apiRouter from "./api";
import schemaRouter from "./schemas";

const baseRouter = Router();

baseRouter.use("/api", apiRouter);

if (process.env.NODE_ENV === "development") {
  baseRouter.use("/dev", schemaRouter);
}

export default baseRouter;
