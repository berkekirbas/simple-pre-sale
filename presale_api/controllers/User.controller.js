const ErrorResponse = require("../utils/errorResponse");
const User = require("../models/User.model");

exports.getUser = (request, response, next) => {
  const {name, walletAddress, metawonzValue} = request.user;
  response.status(201).json({
    success: true,
    data: {
      name: name,
      walletAddress: walletAddress,
      metawonzValue: metawonzValue 
    },
  });
};

exports.setWithdrawAddress = async (request, response, next) => {
  const {walletAddress} = request.body;

  try {
    const user = await User.findById({_id: request.user.id});

    if(!user){
      return next(new ErrorResponse("User Not Found", 404));
    }

    user.walletAddress = walletAddress;

    await user.save();

    return response.status(200).json({
      success: true,
      data: "User Withdraw address changed successfully"
    });
  } catch(error) {
    return next(new ErrorResponse("Server Error", 500));
  }
}