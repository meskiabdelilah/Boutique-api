function errorHandler(error, req, res, next) {
  console.error(error);
  if (error.statusCode) {
    return res.status(error.statusCode).json({
      error: {
        message: error.message,
      },
    });
  }

  if (error.name === "ValidationError") {
    return res.status(400).json({
      error: {
        message: error.message,
      },
    });
  }
  return res.status(500).json({
    error: {
      message: "Internal server error",
    },
  });
}

export default errorHandler;
