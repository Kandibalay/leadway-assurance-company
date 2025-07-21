import USER from "../models/userModel.js";
import crypto from "crypto";
import Jwt from "jsonwebtoken";
import sendEmail from "../utils/sendEmail.js";
import jwt from "jsonwebtoken";
import {
  generateResetEmail,
  generateWelcomeEmail,
  generateVerifyEmail,
} from "../utils/emailTemplate.js";

// SIGN UP
export const signUp = async (req, res) => {
  const { email, password, fullName } = req.body;

  // Validate required fields
  if (!email || !password || !fullName) {
    return res.status(400).json({
      success: false,
      errMsg: "All fields are required for registration",
    });
  }

  // Check password match
  // if (password !== cPassword) {
  //   return res
  //     .status(400)
  //     .json({ success: false, errMsg: "Passwords do not match" });
  // }

  // Check password length
  // if (password.length < 8) {
  //   return res
  //     .status(400)
  //     .json({ success: false, errMsg: "Password must be at least 8 characters long" });
  // }

  try {
    // Check if email already exists
    const existingEmail = await USER.findOne({ email });
    if (existingEmail) {
      return res
        .status(400)
        .json({ success: false, errMsg: "Email already exists" });
    }

    // Create new user
    const newUser = await USER.create({ fullName, email, password });

    // Generate email verification token
    const verifyToken = newUser.getVerifyEmailToken();
    await newUser.save();

    const verifyUrl = `${process.env.CLIENT_URL}/verify-email/${verifyToken}`;
    const verifyEmailHTML = generateVerifyEmail(newUser, verifyUrl);


    // Send email verification
    await sendEmail({
      to: newUser.email,
      subject: "Verify Your Email",
      html: verifyEmailHTML,
    });

    // Generate auth token
    const token = jwt.sign(
      { _id: newUser._id, fullName: newUser.fullName, email: newUser.email },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    // Send successful response
    return res.status(201).json({
      success: true,
      message: "Registration successful. Please check your email to verify your account.",
      user: {
        _id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
        token,
      },
    });

  } catch (error) {
    console.error("Sign up error:", error);
    return res.status(500).json({ success: false, errMsg: error.message });
  }
};


// VERIFY EMAIL
export const verifyEmail = async (req, res) => {
  const { token } = req.params;
  try {
    
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

    res.redirect(`${process.env.CLIENT_URL}/email-verified`);
    res.status(200).json({
      success: true,
      message: "Email verified succesfully"
    })
  } catch (err) {
    console.error("Email verify error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// SIGN IN

export const signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Validate input
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        errMsg: "All fields are required to sign in",
      });
    }

    // Find user
    const user = await USER.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        errMsg: "User not found",
      });
    }

    // Check verification
    if (!user.isVerified) {
      return res.status(403).json({
        success: false,
        errMsg: "Please verify your email before signing in.",
      });
    }

    // Compare password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        errMsg: "Email or password is incorrect",
      });
    }

    // Generate token 
    const token = jwt.sign(
      { _id: user._id, fullName: user.fullName, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    // Return success response
    return res.status(200).json({
      success: true,
      message: "Signed in successfully",
      user: {
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
        token,
      },
    });

  } catch (error) {
    console.error("Sign in error:", error);
    return res.status(500).json({ success: false, errMsg: error.message });
  }
};


// FORGOT PASSWORD

export const forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    if (!email) {
      return res
        .status(400)
        .json({ success: false, errMsg: "Email is required" });
    }

    const user = await USER.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, errMsg: "Email not found" });
    }

    // Generate reset token
    const resetToken = user.getResetPasswordToken();
    await user.save();

    const resetUrl = `${process.env.CLIENT_URL_RESET}${resetToken}`;
    const emailHTML = generateResetEmail(user, resetUrl);

    try {
      await sendEmail({
        to: user.email,
        subject: "Leadway Password Reset",
        html: emailHTML,
      });

      return res.status(201).json({
        success: true,
        message: "Password reset link sent to your email",
      });
    } catch (emailError) {
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;
      await user.save();
      return res.status(500).json({
        success: false,
        errMsg: "Email could not be sent",
        error: emailError.message,
      });
    }
  } catch (error) {
    return res.status(500).json({ success: false, errMsg: error.message });
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

