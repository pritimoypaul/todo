import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import todoRoutes from "./routes/todoRoutes.js";
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import connectDB from "./db/connect.js";

const app = express();
dotenv.config();

// Middlewares
app.use(express.json());
app.use(cors());

//Routes
app.use(todoRoutes);

// Error Handlers
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);
// Run App
const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
