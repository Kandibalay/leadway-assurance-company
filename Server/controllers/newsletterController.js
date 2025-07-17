import Newsletter from "../models/newsletterModel.js";

export const subscribeNewsletter = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) return res.status(400).json({ message: "Email is required" });

    const existing = await Newsletter.findOne({ email });
    if (existing) return res.status(400).json({ message: "Email already subscribed" });

    await Newsletter.create({ email });

    res.status(201).json({ message: "Successfully subscribed to the newsletter" });
  } catch (err) {
    console.error("Newsletter subscription error:", err);
    res.status(500).json({ message: "Server error" });
  }
};
