/**
 * @description Definition for Authentication Routes
 */

const express = require("express");
const router = express.Router();

const {
  register,
  login,
  forgotPassword,
  resetPassword,
  verifyUser,
} = require("../controllers/Auth.controller");

router.route(`/register`).post(register);

router.route(`/login`).post(login);

router.route(`/forgotPassword`).post(forgotPassword);

router.route(`/resetPassword/:resetToken`).put(resetPassword);

router.route(`/verify/:token`).get(verifyUser);

module.exports = router;
