import express from "express";
import {
  signUp,
  signIn,
  forgotPassword,
  resetPassword,
  verifyEmail
} from "../controllers/authController.js";

const router = express.Router();

router.post("/signup", signUp);
router.post("/signin", signIn);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);
router.post("/verify-email/:token", verifyEmail);

export default router;
