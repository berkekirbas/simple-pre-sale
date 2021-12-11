module.exports = (app) => {
  app.use(
    `/api/v${process.env.API_VERSION}/auth`,
    require("./routes/Auth.routes")
  );
};
