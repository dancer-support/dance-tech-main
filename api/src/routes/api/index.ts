import { Router } from "express";
import Performance from "./Performance";

const baseRouter = Router();

baseRouter.use("/performance", Performance);

export default baseRouter;
