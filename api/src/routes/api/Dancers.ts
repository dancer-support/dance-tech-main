import StatusCodes from "http-status-codes";
import { Router } from "express";

import { DancersService } from "../../services/Dancers";
import { DancerService } from "../../services/Dancer";

const dancersService = new DancersService();
const dancerService = new DancerService();
const { OK, CREATED } = StatusCodes;

const router = Router();

router.get("/", async (_req, res) => {
  const dancers = await dancersService.get();
  res.status(OK).json({ performances: dancers });
});

router.get("/:id", async (req, res) => {
  const id = Number(req.params.id);
  const dancer = await dancerService.get(id);
  res.status(OK).json({ dancer });
});

export default router;
