import StatusCodes from "http-status-codes";
import { Router } from "express";

import {
  PerformanceCreationParams,
  PerformanceService,
} from "../../services/Performance";

const performanceService = new PerformanceService();
const { OK, CREATED } = StatusCodes;

const router = Router();

router.get("/:id", (req, res) => {
  (async () => {
    const id = Number(req.params.id);
    const performance = await performanceService.get(id);
    res.status(OK).json({ performance });
  })();
});

router.post("/", (req, res) => {
  (async () => {
    const requestBody: PerformanceCreationParams = req.body;
    const performance = await performanceService.create(requestBody);
    res.status(CREATED).json({ performance });
  })();
});

export default router;
