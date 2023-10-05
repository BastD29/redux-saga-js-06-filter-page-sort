import express from "express";
import * as userController from "../controllers/userController.js";
import * as userMiddlewares from "../middlewares/userMiddleware2.js";

const router = express.Router();

router.get(
  "/",
  userMiddlewares.filterUsers,
  userMiddlewares.paginateUsers,
  // userMiddlewares.sortUsers,
  userController.getUsers
);

export default router;
