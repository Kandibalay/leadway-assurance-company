import Marine from "../models/marineModel.js";

export const submitMarineQuote = async (req, res) => {
  try {
    const { fullName, companyName, email, phoneNumber } = req.body;

    if (!fullName || !companyName || !email || !phoneNumber) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const quote = await Marine.create({ fullName, companyName, email, phoneNumber });

    res.status(201).json({
      message: "Your quote request has been received! Thank you for reaching out to Leadway Assurance. Our marine insurance specialists are reviewing your request and will contact you within 24 hours.",
      quote
    });
  } catch (err) {
    console.error("Marine quote submission error:", err);
    res.status(500).json({ message: "Server error" });
  }
};
