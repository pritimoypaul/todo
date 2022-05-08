const errorHandlerMiddleware = (err,req,res,next) => {
    res.status(500).json("There was an error.")
}

export default errorHandlerMiddleware