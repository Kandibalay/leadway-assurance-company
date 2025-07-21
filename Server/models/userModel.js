import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true, trim: true },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    validate: [
      {
        validator: validator.isEmail,
        message: "Invalid email",
      },
      {
        validator: function (v) {
          return !/@.*@/.test(v);
        },
        message: "Email cannot contain multiple '@' characters",
      },
    ],
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    validate(value) {
      if (value.toLowerCase().includes("password")) {
        throw new Error("Password cannot contain 'password'");
      }
    },
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  verifyEmailToken: String,
  verifyEmailTokenExpire: Date,
  resetPasswordToken: String,
  resetPasswordExpire: Date,
}, { timestamps: true });

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.methods.comparePassword = function (userPassword) {
  return bcrypt.compare(userPassword, this.password);
};

userSchema.methods.generateToken = function () {
  return jwt.sign(
    {
      userId: this._id,
      fullName: this.fullName,
    },
    process.env.JWT_SECRET,
    { expiresIn: "24h" }
  );
};

userSchema.methods.getResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(20).toString("hex");
  this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");
  this.resetPasswordExpire = Date.now() + 10 * 60 * 1000;
  return resetToken;
};

userSchema.methods.getVerifyEmailToken = function () {
  const verifyToken = crypto.randomBytes(20).toString("hex");
  this.verifyEmailToken = crypto.createHash("sha256").update(verifyToken).digest("hex");
  this.verifyEmailTokenExpire = Date.now() + 24 * 60 * 60 * 1000;
  return verifyToken;
};

const USER = mongoose.model("User", userSchema);
export default USER;
