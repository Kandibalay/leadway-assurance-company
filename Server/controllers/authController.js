import USER from "../models/userModel.js";
import crypto from "crypto";
import sendEmail from "../utils/sendEmail.js";
import {
  generateResetEmail,
  generateWelcomeEmail,
  generateVerifyEmail,
} from "../utils/emailTemplate.js";

// SIGN UP
export const signUp = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    const existingUser = await USER.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "Email already registered" });

    const newUser = await USER.create({ fullName, email, password });

    // Generate verification token
    const verifyToken = newUser.getVerifyEmailToken();
    await newUser.save();

    const verifyUrl = `http://localhost:5173/verify-email/${verifyToken}`;
    const verifyEmailHTML = generateVerifyEmail(newUser, verifyUrl);

    await sendEmail({
      to: newUser.email,
      subject: "Verify Your Email",
      html: verifyEmailHTML,
    });

    res.status(201).json({
      message: "Signup successful. Please check your email to verify your account.",
    });
  } catch (err) {
    console.error("Sign up error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// VERIFY EMAIL
export const verifyEmail = async (req, res) => {
  try {
    const { token } = req.params;
    const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

    const user = await USER.findOne({
      verifyEmailToken: hashedToken,
      verifyEmailTokenExpire: { $gt: Date.now() },
    });

    if (!user)
      return res.status(400).json({ message: "Invalid or expired verification token" });

    user.isVerified = true;
    user.verifyEmailToken = undefined;
    user.verifyEmailTokenExpire = undefined;
    await user.save();

    const welcomeEmail = generateWelcomeEmail(user);
    await sendEmail({
      to: user.email,
      subject: "Welcome to Leadway Assurance",
      html: welcomeEmail,
    });

    res.redirect("http://localhost:5173/email-verified");
  } catch (err) {
    console.error("Email verify error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// SIGN IN
export const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await USER.findOne({ email });
    if (!user)
      return res.status(400).json({ message: "Invalid credentials" });

    if (!user.isVerified)
      return res.status(403).json({ message: "Please verify your email before logging in." });

    const isMatch = await user.comparePassword(password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = user.generateToken();

    res.status(200).json({
      message: "Sign in successful",
      token,
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    console.error("Sign in error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// FORGOT PASSWORD
export const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await USER.findOne({ email });
    if (!user)
      return res.status(404).json({ message: "User not found" });

    const resetToken = user.getResetPasswordToken();
    await user.save();

    const resetUrl = `http://localhost:5000/api/auth/reset-password/${resetToken}`;
    const emailHTML = generateResetEmail(user, resetUrl);

    await sendEmail({
      to: user.email,
      subject: "Leadway Password Reset",
      html: emailHTML,
    });

    res.json({ message: "Reset link sent to your email" });
  } catch (err) {
    console.error("Forgot password error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// RESET PASSWORD
export const resetPassword = async (req, res) => {
  try {
    const { token } = req.params;
    const { newPassword } = req.body;

    const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

    const user = await USER.findOne({
      resetPasswordToken: hashedToken,
      resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user)
      return res.status(400).json({ message: "Invalid or expired token" });

    user.password = newPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save();

    res.json({ message: "Password reset successful" });
  } catch (err) {
    console.error("Reset password error:", err);
    res.status(500).json({ message: "Server error" });
  }
};
