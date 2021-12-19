
const express = require("express");
const router = express.Router();

const { generateCsrf, checkAuthentication } = require("../controllers/Secure.controller");

router.route("/getCSRFToken").get(generateCsrf);
router.route("/authenticationChecker").get(checkAuthentication);

module.exports = router;
