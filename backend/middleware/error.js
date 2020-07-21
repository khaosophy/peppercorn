const colors = require('colors');
const ErrorResponse = require('../utils/errorResponse');

const errorHandler = (err, req, res, next) => {
  console.log(colors.red(err.stack));
  let error = { ...err };
  error.message = err.message;

  if(err.name === 'CastError') { // i.e. invalid Mongoose ObjectId
    const message = `Object not found with id of ${err.value}`;
    error = new ErrorResponse(message, 404);
  }

  if(err.code === 11000) {  // i.e. duplicate key error
    const message = 'Duplicate field value entered';
    error = new ErrorResponse(message, 400);
  }

  if(err.name === 'ValidationError') {  // i.e. missing or invalid data!
    const message = Object.values(err.errors).map(value => value.message);
    error = new ErrorResponse(message, 400);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || 'Server Error',
  });
}

module.exports = errorHandler;