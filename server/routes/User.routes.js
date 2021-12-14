/**
 * @description All User routes
 */

const express = require("express");
const router = express.Router();

const { getUser } = require("../controllers/User.controller");

const { protect } = require("../middleware/auth");

router.route("/getUser").get(protect, getUser);

module.exports = router;
