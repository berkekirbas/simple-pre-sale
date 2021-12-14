const User = require("../models/User.model");
const ErrorResponse = require("../utils/errorResponse");

exports.register = async (request, response, next) => {
  const { name, email, password } = request.body;

  try {
    const user = await User.findOne({ email });
    if (user) {
      return next(new ErrorResponse("User already exist", 400));
    }
  } catch (error) {
    return next(new ErrorResponse("Something went wrong", 500));
  }

  try {
    const user = await User.create({
      name,
      email,
      password,
    });
    //sendToken(user, 201, response);
    response.status(201).json({
      success: true,
      data: [
        {
          message:
            "User registration is successfully, Please verify your E-mail",
          email: user.email,
        },
      ],
    });
  } catch (error) {
    next(new ErrorResponse("Something went wrong", 500));
  }
};

exports.login = async (request, response, next) => {
  const { email, password } = request.body;

  if (!email || !password) {
    return next(new ErrorResponse("Please provide an email and password", 400));
  }

  try {
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return next(new ErrorResponse("Invalid Credentials", 401));
    }

    const isMatch = await user.matchPasswords(password);

    if (!isMatch) {
      return next(new ErrorResponse("Invalid Credentials", 401));
    }

    sendToken(user, 200, response);
  } catch (error) {
    response.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.forgotPassword = (request, response, next) => {
  response.send("Forgot Password Controller");
};

exports.resetPassword = (request, response, next) => {
  response.send("Reset Password Controller");
};

const sendToken = (user, statusCode, response) => {
  const token = user.getSignedToken();
};
