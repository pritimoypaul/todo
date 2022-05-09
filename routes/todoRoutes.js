import express from "express";
import {
  createTodo,
  deleteTodo,
  getAllTodos,
  getSingleTodo,
  updateTodo,
} from "../controllers/todoControllers.js";

const router = express.Router();

// Routes
router.get("/todos", getAllTodos);
router.get("/todos/:id", getSingleTodo);
router.post("/todos/create", createTodo);
router.patch("/todos/update/:id", updateTodo);
router.delete("/todos/delete/:id", deleteTodo);

export default router;
