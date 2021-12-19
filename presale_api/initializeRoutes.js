module.exports = (app) => {
  app.use(
    `/api/v${process.env.API_VERSION}/auth`,
    require("./routes/Auth.routes")
  );

  app.use(
    `/api/v${process.env.API_VERSION}/private/user`,
    require("./routes/User.routes")
  );

  app.use(
    `/api/v${process.env.API_VERSION}/secure`,
    require("./routes/Secure.routes")
  );
};
