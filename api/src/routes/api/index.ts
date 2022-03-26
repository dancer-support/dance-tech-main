import { Router } from "express";
import Users from "./User";

const baseRouter = Router();

baseRouter.use("/users", Users);

export default baseRouter;
