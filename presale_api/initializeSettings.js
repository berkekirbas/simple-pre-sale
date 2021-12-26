const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const cookieParser = require('cookie-parser');
const csrf = require('csurf');

module.exports = (app) => {
  app.use(helmet());
  app.use(cors({ origin: process.env.FRONTEND_BASE_URL, credentials: true }));
  app.use(cookieParser());
  app.use(bodyParser.json());
  app.use(morgan("combined"));
  app.use(csrf({
    cookie: true
  }));
};
