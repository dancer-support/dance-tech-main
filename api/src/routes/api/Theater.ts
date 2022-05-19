import StatusCodes from "http-status-codes";
import { Router } from "express";

import { TheaterCreationParams, TheaterService } from "../../services/Theater";

const theaterService = new TheaterService();
const { CREATED } = StatusCodes;

const router = Router();

router.post("/", (req, res) => {
  (async () => {
    const requestBody: TheaterCreationParams = req.body;
    const theater = await theaterService.create(requestBody);
    res.status(CREATED).json({ theater });
  })();
});

export default router;
