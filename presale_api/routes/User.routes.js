/**
 * @description All User routes
 */

const express = require("express");
const router = express.Router();

const { getUser, setWithdrawAddress, addPurchasedMetawonz } = require("../controllers/User.controller");

const { protect } = require("../middleware/auth");

router.route("/getUser").get(protect, getUser);
router.route("/setWithdrawAddress").put(protect, setWithdrawAddress);
router.route("/addPurchasedMetawonz").put(protect, addPurchasedMetawonz);

module.exports = router;
