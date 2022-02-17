import { Router } from "express";
import * as Users from "./Users";

// Export the base-router
const baseRouter = Router();

baseRouter.use("/users/all", Users.getAllUsers);

export default baseRouter;
