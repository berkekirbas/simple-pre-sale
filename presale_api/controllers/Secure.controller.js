exports.generateCsrf = async (request,response,next) => {
	response.json({ CSRFToken: request.csrfToken() });
}

exports.checkAuthentication = async (request, response, next) =>{
	let status = request.cookies['authKey'] ? true : false;
	return response.status(200).json({
		success:true, data: status
	})
};