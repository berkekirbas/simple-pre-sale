const jwt = require("jsonwebtoken");
const ErrorResponse = require("../utils/errorResponse");
const User = require("../models/User.model");


exports.generateCsrf = async (request,response,next) => {
	response.json({ CSRFToken: request.csrfToken() });
}

exports.checkAuthentication = async (request, response, next) =>{
	let token = request.cookies['auth_key'];

	if(!token){
		return response.status(200).json({
				success:true, data: false
		});
	}

	try {
    	const decodedJwtToken = jwt.verify(token, process.env.JWT_SECRET);

    	const user = await User.findById({_id: decodedJwtToken.id});

    	if (!user) {
      		return response.status(200).json({
				success:true, data: false
			});
    	}

    	return response.status(200).json({
				success:true, data: true
		})

  	} catch (error) {
    	return next(new ErrorResponse("Jwt Expired", 200));
  	}


	
};