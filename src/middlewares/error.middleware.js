function errorHandler(error, req, res, next) {
  console.error(error);

  return res.status(500).json({
    error: {
      message: "Internal server error"
    }
  });
}

export default errorHandler;