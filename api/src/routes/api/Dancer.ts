import StatusCodes from "http-status-codes";
import { Router } from "express";

import { DancerCreationParams, DancerService } from "../../services/Dancer";

const dancerService = new DancerService();
const { CREATED } = StatusCodes;

const router = Router();

router.post("/", (req, res) => {
  (async () => {
    const requestBody: DancerCreationParams = req.body;
    const dancer = await dancerService.create(requestBody);
    res.status(CREATED).json({ dancer });
  })();
});

export default router;
