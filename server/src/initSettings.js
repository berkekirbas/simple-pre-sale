const bodyParser = require("body-parser"),
  helmet = require("helmet"),
  cors = require("cors"),
  morgan = require("morgan");

module.exports = (app) => {
  // adding Helmet to enhance your API's security
  app.use(helmet());

  // using bodyParser to parse JSON bodies into JS objects
  app.use(bodyParser.json());

  // enabling CORS for all requests
  app.use(cors());

  // adding morgan to log HTTP requests
  app.use(morgan("combined"));
};
