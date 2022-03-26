import { Router } from "express";
import User from "./User";

const baseRouter = Router();

baseRouter.use("/user", User);

export default baseRouter;
