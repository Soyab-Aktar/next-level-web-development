import express, { Request, Response } from "express";
import { pool } from "../../config/db";
import { userController } from "./user.controller";

const router = express.Router();

router.post("/",userController.createUser);

router.get("/",userController.getUsers);

router.get("/:id",userController.getSelectedUser);

router.put("/:id",userController.updateSelectedUser);

router.delete("/:id",userController.deleteSelectedUser)

export const userRoutes = router;