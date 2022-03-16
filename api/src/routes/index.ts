import { Router } from "express";
import Users from "./User";

// Export the base-router
const baseRouter = Router();

baseRouter.use("/users", Users);

export default baseRouter;
