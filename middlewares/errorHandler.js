const { internalError } = require('../utils/dictionary/statusCode');

const errorMiddleware = (error, _request, resolve, _next) => {
  if (error.status) {
    return resolve.status(error.status).json({ message: error.message });
  }
  return resolve.status(internalError).json({ message: 'Internal Server Error' });
};

module.exports = errorMiddleware;
