import StatusCodes from "http-status-codes";
import { Router } from "express";

import { UserService } from "../../services/User";

const userService = new UserService();
const { OK, CREATED } = StatusCodes;

const router = Router();

router.get("/", async (_req, res) => {
  const user = await userService.get(1);
  res.status(OK).json({ user });
});

router.post("/", async (req, res) => {
  const requestBody = req.body;
  const user = await userService.create(requestBody);
  res.status(CREATED).json({ user });
});

export default router;
