const jwt = require("jsonwebtoken");

const User = require("../models/User.model");

const ErrorResponse = require("../utils/errorResponse");
const transporter = require("../utils/emailConfiguration");

const crypto = require("crypto");

exports.register = async (request, response, next) => {
  const { name, email, password } = request.body;

  try {
    const user = await User.findOne({ email });
    if (user) {
      return next(new ErrorResponse("User already exist", 200));
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

    const url = `${process.env.BASE_URL}:${process.env.PORT}/api/v${process.env.API_VERSION}/auth/verify/${verificationToken}`;

    // TODO: FIX this
    await transporter.sendMail({
      from: process.env.MAIL_USERNAME,
      to: email,
      subject: "Account Verification",
      html: `Click <a href='${url}' clicktracking=off>here</a> to confirm your email`,
    });

    response.status(201).json({
      success: true,
      data: "User registration is successfully, Please verify your E-mail",
    });
  } catch (error) {
    next(new ErrorResponse("Something went wrong", 500));
  }
};

exports.login = async (request, response, next) => {
  const { email, password } = request.body;

  if (!email || !password) {
    return next(new ErrorResponse("Please provide an email and password", 200));
  }

  try {
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return next(new ErrorResponse("Invalid Credentials", 200));
    }

    const isMatch = await user.matchPasswords(password);

    if (!isMatch) {
      return next(new ErrorResponse("Invalid Credentials", 200));
    }

    sendToken(user, 200, response);
  } catch (error) {
    response.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.forgotPassword = async (request, response, next) => {
  const { email } = request.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return next(new ErrorResponse("Email could not be send", 404));
    }

    const resetToken = user.getResetPasswordToken();

    await user.save();

    const resetUrl = `${process.env.BASE_URL}:${process.env.PORT}/api/v${process.env.API_VERSION}/auth/resetPassword/${resetToken}`;

    const message = `
    <h1>You have requested a password reset</h1>
    <p>Please go to this link to reset your password</p>
    <a href=${resetUrl} clicktracking=off>${resetUrl}</a>
    `;

    try {
      await transporter.sendMail({
        from: process.env.MAIL_USERNAME,
        to: user.email,
        subject: "Password Reset Request",
        html: message,
      });

      response.status(200).json({ success: true, data: "Email Sent" });
    } catch (error) {
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;

      await user.save();

      return next(new ErrorResponse("Email could not be send", 500));
    }
  } catch (error) {
    next(error);
  }
};

exports.resetPassword = async (request, response, next) => {
  const { resetToken } = request.params;
  const { password } = request.body;

  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  try {
    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user) {
      return next(new ErrorResponse("Invalid reset token", 400));
    }

    user.password = password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    response.status(201).json({
      success: true,
      data: "Password Reset Success",
    });
  } catch (error) {
    next(error);
  }
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
    return next(new ErrorResponse(error, 500));
  }

  // Step 2 - Find user with matching ID
  try {
    const user = await User.findOne({ _id: payload.id }).exec();
    if (!user) {
      return next(new ErrorResponse("User does not exist", 404));
    }
    if (user.isVerified) {
      return next(new ErrorResponse("This user is already verified", 409));
    }

    // Step 3 - Update user verification status to true
    user.isVerified = true;
    await user.save();

    return response.status(200).json({
      success: true,
      message: "Your Account is verified",
    });
  } catch (error) {
    return next(new ErrorResponse("Someting went wrong", 500));
  }
};

const sendToken = (user, statusCode, response) => {
  const token = user.getSignedToken();

  return response
    .cookie("auth_key", token, {
      sameSite: "strict",
      path: "/",
      expires: new Date(Date.now() + 3600 * 60 * 60 ), 
      httpOnly: true,
      secure: process.env.APP_MODE == "production" ? true : false
    })
    .json({
      success: true,
      data: "User Authentication is successfully",
    });
};
