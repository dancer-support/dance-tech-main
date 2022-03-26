import StatusCodes from "http-status-codes";
import { Router } from "express";

import { PerformanceService } from "../../services/Performance";

const performanceService = new PerformanceService();
const { OK, CREATED } = StatusCodes;

const router = Router();

router.post("/", async (req, res) => {
  const requestBody = req.body;
  const performance = await performanceService.create(requestBody);
  res.status(CREATED).json({ performance });
});

export default router;
