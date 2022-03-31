import { Router } from "express";
import Performances from "./Performances";
import Performance from "./Performance";
import Dancers from "./Dancers";
import Dancer from "./Dancer";

const baseRouter = Router();

baseRouter.use("/performances", Performances);
baseRouter.use("/performance", Performance);
baseRouter.use("/dancers", Dancers);
baseRouter.use("/dancer", Dancer);

export default baseRouter;
