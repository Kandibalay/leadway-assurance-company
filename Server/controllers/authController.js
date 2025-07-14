import USER from "../models/userModel.js";
import crypto from "crypto";
import sendEmail from "../utils/sendEmail.js";
import { generateResetEmail, generateWelcomeEmail } from "../utils/emailTemplate.js";

// SIGN UP
export const signUp = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    const existingUser = await USER.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "Email already registered" });

    const newUser = await USER.create({ firstName, lastName, email, password });
    const token = newUser.generateToken();

    // Send welcome email
    const welcomeEmail = generateWelcomeEmail(newUser);
    await sendEmail({
      to: newUser.email,
      subject: "Welcome to Leadway Assurance",
      html: welcomeEmail,
    });

    res.status(201).json({
      message: "Sign up successful",
      token,
      user: {
        id: newUser._id,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
        role: newUser.role,
      },
    });
  } catch (err) {
    console.error("Sign up error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// SIGN IN
export const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await USER.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = user.generateToken();

    res.status(200).json({
      message: "Sign in successful",
      token,
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
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
    if (!user) return res.status(404).json({ message: "User not found" });

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

    if (!user) return res.status(400).json({ message: "Invalid or expired token" });

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
