const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
  },
  email: {
    type: String,
    required: [true, "Please provide a email"],
    unique: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide a valid email",
    ],
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: 6,
    select: false,
  },

  isVerified: {
    type: Boolean,
    required: true,
    default: false,
  },

  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

// Hashing password before saving to the DB
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Password Matching Control
userSchema.methods.matchPasswords = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// get signed token // içine aslında id de gizliyoruz oluşturulan jwt tokenlerin
userSchema.methods.getSignedToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

// user email verification token
userSchema.methods.generateVerificationToken = function () {
  return jwt.sign({ id: this._id }, process.env.VERIFICATION_SECRET_TOKEN, {
    expiresIn: process.env.VERIFICATION_EXPIRE,
  });
};

const User = mongoose.model("User", userSchema);

module.exports = User;
