const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

module.exports = (app) => {
  app.use(helmet());

  app.use(bodyParser.json());

  app.use(cors());

  app.use(morgan("combined"));
};
