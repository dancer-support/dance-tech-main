import { Router } from "express";
import Performances from "./Performances";
import Performance from "./Performance";
import Dancers from "./Dancers";
import Dancer from "./Dancer";
import Theaters from "./Theaters";
import Theater from "./Theater";

const baseRouter = Router();

baseRouter.use("/performances", Performances);
baseRouter.use("/performance", Performance);
baseRouter.use("/dancers", Dancers);
baseRouter.use("/dancer", Dancer);
baseRouter.use("/theaters", Theaters);
baseRouter.use("/theater", Theater);

export default baseRouter;
