import StatusCodes from "http-status-codes";
import { Request, Response, Router } from "express";

import UserDao from "@daos/User/UserDao.mock";
// import { paramMissingError } from "@shared/constants";

const userDao = new UserDao();
const { OK } = StatusCodes;

const router = Router();

/**
 * Get all users.
 *
 * @param req
 * @param res
 * @returns
 */
router.get("/all", (_req: Request, res: Response): void => {
  userDao.getAll().then((users) => {
    res.status(OK).json({ users });
  });
});

// /**
//  * Add one user.
//  *
//  * @param req
//  * @param res
//  * @returns
//  */
// export async function addOneUser(req: Request, res: Response) {
//   const { user } = req.body;
//   if (!user) {
//     return res.status(BAD_REQUEST).json({
//       error: paramMissingError,
//     });
//   }
//   await userDao.add(user);
//   return res.status(CREATED).end();
// }

// /**
//  * Update one user.
//  *
//  * @param req
//  * @param res
//  * @returns
//  */
// export async function updateOneUser(req: Request, res: Response) {
//   const { user } = req.body;
//   if (!user) {
//     return res.status(BAD_REQUEST).json({
//       error: paramMissingError,
//     });
//   }
//   user.id = Number(user.id);
//   await userDao.update(user);
//   return res.status(OK).end();
// }

// /**
//  * Delete one user.
//  *
//  * @param req
//  * @param res
//  * @returns
//  */
// export async function deleteOneUser(req: Request, res: Response) {
//   const { id } = req.params;
//   await userDao.delete(Number(id));
//   return res.status(OK).end();
// }

export default router;
