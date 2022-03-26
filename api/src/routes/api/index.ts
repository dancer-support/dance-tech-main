import { Router } from "express";
import Performance from "./Performance";
import Performances from "./Performances";
import Dancer from "./Dancer";

const baseRouter = Router();

baseRouter.use("/performance", Performance);
baseRouter.use("/performances", Performances);
baseRouter.use("/dancer", Dancer);

export default baseRouter;
