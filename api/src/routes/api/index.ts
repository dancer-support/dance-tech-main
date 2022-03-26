import { Router } from "express";
import Performance from "./Performance";
import Performances from "./Performances";

const baseRouter = Router();

baseRouter.use("/performance", Performance);
baseRouter.use("/performances", Performances);

export default baseRouter;
