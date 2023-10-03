import express from "express";
import * as userController from "../controllers/userController.js";
import * as userMiddlewares from "../middlewares/userMiddleware.js";

const router = express.Router();

router.get(
  "/",
  userMiddlewares.filterUsers,
  userMiddlewares.sortUsers,
  userMiddlewares.paginateUsers,
  userController.getUsers
);

export default router;
