const express = require("express"),
  app = express();

const path = require("path");

require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const initializeSettings = require("./initSettings");

// App Initializer
initializeSettings(app);

// listener
app.listen(process.env.SERVER_PORT, () =>
  console.log(`Server is started in ${process.env.SERVER_PORT}`)
);
