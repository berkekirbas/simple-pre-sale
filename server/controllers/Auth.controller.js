const User = require("../models/User.model");

exports.register = async (request, response, next) => {
  const { name, email, password } = request.body;

  try {
    const user = await User.create({
      name,
      email,
      password,
    });

    response.status(201).json({
      success: true,
      user,
    });
  } catch (error) {
    response.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.login = (request, response, next) => {
  const { email, password } = request.body;

  if (!email || !password) {
    response
      .status(400)
      .json({ success: false, error: "Please provide email and password" });
  }
};

exports.forgotPassword = (request, response, next) => {
  response.send("Forgot Password Controller");
};

exports.resetPassword = (request, response, next) => {
  response.send("Reset Password Controller");
};
