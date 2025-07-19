import Contact from "../models/contactModel.js";

export const submitContact = async (req, res) => {
  try {
    const { fullName, message } = req.body;

    if (!fullName || !message) {
      return res.status(400).json({ message: "Full name and message are required" });
    }

    const newMessage = await Contact.create({ fullName, message });

    res.status(201).json({
      message: "Contact message submitted successfully",
      data: newMessage,
    });
  } catch (error) {
    console.error("Contact form error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
