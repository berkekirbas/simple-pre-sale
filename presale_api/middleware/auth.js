const jwt = require("jsonwebtoken");

const ErrorResponse = require("../utils/errorResponse");
const User = require("../models/User.model");

exports.protect = async (request, response, next) => {
  let token = request.cookies['authKey'];

  if (!token) {
    return next(new ErrorResponse("Not authorized to access this route", 401));
  }

  try {
    const decodedJwtToken = jwt.verify(token, process.env.JWT_SECRET);

    const user = User.findById(decodedJwtToken.id);

    if (!user) {
      return next(new ErrorResponse("No user found with this id", 404));
    }

    request.user = user;

    next();
  } catch (error) {
    return next(new ErrorResponse("Not authorized to access this route", 401));
  }
};
