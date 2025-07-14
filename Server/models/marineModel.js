import mongoose from "mongoose";

const marineQuoteSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true,
  },
  companyName: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    trim: true,
  },
}, { timestamps: true });

const MarineQuote = mongoose.model("MarineQuote", marineQuoteSchema);
export default MarineQuote;
