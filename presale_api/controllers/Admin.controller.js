const { USER_TYPE } = require("../config/constants");
const ErrorResponse = require("../utils/errorResponse");
const User = require("../models/User.model");


exports.checkIsAdmin = (request, response, next) => {
  const { role } = request.user;

  if (role === USER_TYPE.ADMIN) {
    return response.status(200).json({
      success: true,
      data: true,
    });
  }
  return next(
    new ErrorResponse("You are not authorized to access this page", 200)
  );
};

exports.getAllUsers = async (request, response, next) => {
  try {
    const data = await User.find();
    return response.status(200).json({
      success: true,
      data: data
    });
  } catch(error) {
    return next(new ErrorResponse("Server Error", 500));
  }
  
}