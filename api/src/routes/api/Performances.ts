import StatusCodes from "http-status-codes";
import { Router } from "express";

import { PerformancesService } from "../../services/Performances";

const performancesService = new PerformancesService();
const { OK } = StatusCodes;

const router = Router();

router.get("/", async (req, res) => {
  const performances = await performancesService.get();
  res.status(OK).json({ performances });
});

export default router;
