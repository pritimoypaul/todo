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

export const getSingleTodo = async (req, res) => {
  try {
    const singleTodo = await Todo.findById(req.params["id"]);
    res.json(singleTodo);
  } catch (error) {
    res.status(500).json("An error occured!");
  }
};

export const updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params["id"]);
    todo["complete"] = !todo["complete"];
    todo.save();
    res.json(todo);
  } catch (error) {
    res.status(500).json("An error occured!");
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const delTodo = await Todo.findByIdAndDelete(req.params["id"]);
    res.json(delTodo);
  } catch (error) {
    res.status(500).json("An error occured!");
  }
};
