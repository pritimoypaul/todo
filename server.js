import express from "express";
import cors from "cors";
import todoRoutes from "./routes/todoRoutes.js"
import notFoundMiddleware from "./middleware/not-found.js";

const app = express()

// Middlewares
app.use(express.json())
app.use(cors())

//Routes
app.use(todoRoutes)


// Error Handlers
app.use(notFoundMiddleware)

// Run App
const port = process.env.PORT || 5000

app.listen(port, ()=>{console.log(`Server running on port ${port}`)})