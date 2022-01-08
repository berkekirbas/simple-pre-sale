/**
 * @description All User routes
 */

const express = require("express");
const router = express.Router();

const { checkIsAdmin } = require("../controllers/Admin.controller");

const { protect } = require("../middleware/auth");

router.route("/checkIsAdmin").get(protect, checkIsAdmin);

module.exports = router;
