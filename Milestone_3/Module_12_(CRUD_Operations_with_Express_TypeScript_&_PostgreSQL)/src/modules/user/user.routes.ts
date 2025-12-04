import express, { Request, Response } from "express";
import { pool } from "../../config/db";
import { userController } from "./user.controller";
import logger from "../../middleware/logger";
import auth from "../../middleware/auth";

const router = express.Router();

router.post("/", userController.createUser);

router.get("/", logger, auth("admin"), userController.getUsers);

router.get("/:id", userController.getSelectedUser);

router.put("/:id", userController.updateSelectedUser);

router.delete("/:id", userController.deleteSelectedUser)

export const userRoutes = router;