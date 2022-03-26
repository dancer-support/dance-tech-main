import StatusCodes from "http-status-codes";
import { Router } from "express";

import {
  PerformanceCreationParams,
  PerformanceService,
} from "../../services/Performance";

const performanceService = new PerformanceService();
const { CREATED } = StatusCodes;

const router = Router();

router.post("/", (req, res) => {
  (async () => {
    const requestBody: PerformanceCreationParams = req.body;
    const performance = await performanceService.create(requestBody);
    res.status(CREATED).json({ performance });
  })();
});

export default router;
