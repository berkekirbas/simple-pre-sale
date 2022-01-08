const { USER_TYPE } = require("../config/constants");
const ErrorResponse = require("../utils/errorResponse");

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
