require("dotenv").config({ path: "./config.env" });
const express = require("express");

const PORT = process.env.PORT || 5000;
const app = express();

const initializeSettings = require("./initializeSettings");
const initializeRoutes = require("./initializeRoutes");
const databaseConnector = require("./config/databaseConnector");

initializeSettings(app);
initializeRoutes(app);
databaseConnector();

const server = app.listen(PORT, () =>
  console.log(`API is started on port ${PORT} `)
);

process.on("unhandledRejection", (error, promise) => {
  console.log(`Logged Error: ${error}`);
  server.close(() => process.exit(1));
});
