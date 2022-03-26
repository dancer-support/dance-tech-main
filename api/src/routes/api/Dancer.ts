import StatusCodes from "http-status-codes";
import { Router } from "express";

import { DancerService } from "../../services/Dancer";

const dancerService = new DancerService();
const { CREATED } = StatusCodes;

const router = Router();

router.post("/", async (req, res) => {
  const requestBody = req.body;
  const dancer = await dancerService.create(requestBody);
  res.status(CREATED).json({ dancer });
});

export default router;
