import Todo from "../models/Todo.js";

// All Controllers goes here

export const createTodo = async (req, res) => {
  try {
    const newTodo = await Todo.create(req.body);
    res.json(newTodo);
  } catch (error) {
    res.status(500).json("An error occured!");
  }
};

export const getAllTodos = async (req, res) => {
  try {
    const allTodo = await Todo.find();
    res.json(allTodo);
  } catch (error) {
    res.status(500).json("An error occured!");
  }
};
