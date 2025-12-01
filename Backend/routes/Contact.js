const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// CONTACT API
router.post("/", async (req, res) => {
  try {
    const { fullName, email, mobile, subject, message } = req.body;

    if (!fullName || !email || !mobile || !message) {
      return res.status(400).json({ msg: "Please fill all required fields" });
    }

    const newContact = new Contact({
      fullName,
      email,
      mobile,
      subject,
      message,
    });

    await newContact.save();

    res.status(201).json({
      msg: "Message sent successfully",
      data: newContact,
    });
  } catch (error) {
    console.error("Contact Error:", error);
    res.status(500).json({ msg: "Server error" });
  }
});

module.exports = router;
