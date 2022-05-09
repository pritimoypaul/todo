import express from "express";
import { createTodo, getAllTodos } from "../controllers/todoControllers.js";

const router = express.Router();

// Routes
router.get("/todos", getAllTodos);
router.post("/todos/create", createTodo);

export default router;
