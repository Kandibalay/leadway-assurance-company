import mongoose from "mongoose";
import validator from "validator";

const newsletterSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    validate: {
      validator: validator.isEmail,
      message: "Please enter a valid email",
    },
  },
}, { timestamps: true });

const Newsletter = mongoose.model("Newsletter", newsletterSchema);
export default Newsletter;
