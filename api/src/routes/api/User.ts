import StatusCodes from "http-status-codes";
import { Router } from "express";

import { UserService } from "../../services/User";

const userService = new UserService();
const { OK } = StatusCodes;

const router = Router();

router.get("/", (_req, res) => {
  const user = userService.get(1);
  res.status(OK).json({ user });
});

export default router;
