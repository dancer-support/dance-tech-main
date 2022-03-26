import StatusCodes from "http-status-codes";
import { Router } from "express";

import { DancerService } from "../../services/Dancer";

const dancerService = new DancerService();
const { OK, CREATED } = StatusCodes;

const router = Router();

router.get("/:id", async (req, res) => {
  const id = Number(req.params.id);
  const dancer = await dancerService.get(id);
  res.status(OK).json({ dancer });
});

router.post("/", async (req, res) => {
  const requestBody = req.body;
  const dancer = await dancerService.create(requestBody);
  res.status(CREATED).json({ dancer });
});

export default router;
