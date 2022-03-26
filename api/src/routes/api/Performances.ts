import StatusCodes from "http-status-codes";
import { Router } from "express";

import { PerformancesService } from "../../services/Performances";
import { PerformanceService } from "../../services/Performance";

const performancesService = new PerformancesService();
const performanceService = new PerformanceService();
const { OK } = StatusCodes;

const router = Router();

router.get("/", async (_req, res) => {
  const performances = await performancesService.get();
  res.status(OK).json({ performances });
});

router.get("/:id", async (req, res) => {
  const id = Number(req.params.id);
  const performance = await performanceService.get(id);
  res.status(OK).json({ performance });
});

export default router;
