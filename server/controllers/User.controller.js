exports.getUser = (request, response, next) => {
  response.send(201, {
    success: true,
    data: "you have access to this route",
  });
};
