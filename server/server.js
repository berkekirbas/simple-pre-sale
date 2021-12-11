require("dotenv").config({ path: "./config.env" });
const express = require("express");
const databaseConnector = require("./config/databaseConnector");
const errorHandler = require("./middleware/error");

databaseConnector();

const PORT = process.env.PORT || 5000;
const app = express();

const initializeSettings = require("./initializeSettings");
const initializeRoutes = require("./initializeRoutes");

initializeSettings(app);
initializeRoutes(app);
app.use(errorHandler);

const server = app.listen(PORT, () =>
  console.log(`API is started on port ${PORT} `)
);

process.on("unhandledRejection", (error, promise) => {
  console.log(`Logged Error: ${error}`);
  server.close(() => process.exit(1));
});
