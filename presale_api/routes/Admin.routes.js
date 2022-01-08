/**
 * @description All User routes
 */

const express = require("express");
const router = express.Router();

const { checkIsAdmin, getAllUsers } = require("../controllers/Admin.controller");

const { protect } = require("../middleware/auth");

router.route("/checkIsAdmin").get(protect, checkIsAdmin);
router.route("/getAllUsers").get(protect, getAllUsers);

module.exports = router;
