const successResponse = (data = null, message = null, status = true) => {
  return {
    status: status,
    message: message,
    response: data,
  };
};

const errorResponse = (error = null, message = null, status = false) => {
  return {
    status: status,
    message: message,
    error: error,
  };
};

module.exports = {
  successResponse,
  errorResponse,
};
