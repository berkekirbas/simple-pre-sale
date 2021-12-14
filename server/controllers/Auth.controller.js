const mongoose = require("mongoose");

const User = require("../models/User.model");

const ErrorResponse = require("../utils/errorResponse");
const transporter = require("../utils/emailConfiguration");

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

    const verificationToken = user.generateVerificationToken();

    const url = `${process.env.BASE_URL}/api/${process.env.API_VERSION}/verify/${verificationToken}`;

    // TODO: FIX this
    transporter.sendMail({
      from: process.env.MAIL_USERNAME,
      to: email,
      subject: "Account Verification",
      html: `Click <a href='${url}'>here</a> to confirm your email`,
    });

    response.status(201).json({
      success: true,
      data: [
        {
          message:
            "User registration is successfully, Please verify your E-mail",
        },
      ],
    });
  } catch (error) {
    next(new ErrorResponse("Something went wrong", 500));
  }
};

/**
 * @description USER LOGIN
 *
 * @param {*} request
 * @param {*} response
 * @param {*} next
 * @returns
 */

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

exports.verifyUser = async (request, response, next) => {
  const { token } = request.params;

  if (!token) {
    return next(new ErrorResponse("Missing Token", 422));
  }

  // Step 1 -  Verify the token from the URL
  let payload = null;
  try {
    payload = jwt.verify(token, process.env.VERIFICATION_SECRET_TOKEN);
  } catch (error) {
    return next(new ErrorResponse(err, 500));
  }

  // Step 2 - Find user with matching ID
  try {
    const user = await User.findOne({ _id: payload.id }).exec();
    if (!user) {
      return next(new ErrorResponse("User does not exist", 404));
    }

    // Step 3 - Update user verification status to true
    user.verified = true;
    await user.save();

    return response.status(200).json({
      success: true,
      message: "Your Account is verified",
    });
  } catch (error) {}
};

const sendToken = (user, statusCode, response) => {
  const token = user.getSignedToken();
  res.status(statusCode).json({ sucess: true, token });
};
