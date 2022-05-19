import StatusCodes from "http-status-codes";
import { Router } from "express";

import { TheatersService } from "../../services/Theaters";
import { TheaterService } from "../../services/Theater";

const theatersService = new TheatersService();
const theaterService = new TheaterService();
const { OK } = StatusCodes;

const router = Router();

router.get("/", (_req, res) => {
  (async () => {
    const theaters = await theatersService.get();
    res.status(OK).json({ theaters });
  })();
});

router.get("/:id", (req, res) => {
  (async () => {
    const id = Number(req.params.id);
    const theater = await theaterService.get(id);
    res.status(OK).json({ theater });
  })();
});

export default router;
