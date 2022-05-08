import express from "express";
import {getAllTodos} from "../controllers/todoControllers.js"

const router = express.Router()

// Routes
router.get('/todos', getAllTodos)


export default router