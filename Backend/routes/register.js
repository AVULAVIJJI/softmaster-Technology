const express = require("express");
const router = express.Router();

const Registration = require("../models/Registration");
const Contact = require("../models/Contact");

/* ===============================
   ⭐ Registration API
================================ */
router.post("/", async (req, res) => {
  const start = Date.now();

  try {
    const { name, email, mobile, course, message, termsAccepted } = req.body;

    if (!name || !email || !mobile || !course) {
      return res.status(400).json({ msg: "Please fill all required fields" });
    }

    const registration = await Registration.create({
      name,
      email,
      mobile,
      course,
      message,
      termsAccepted: !!termsAccepted,
    });

    console.log("Registration saved in", Date.now() - start, "ms");

    // 🚀 Respond immediately
    res.status(201).json({
      msg: "Registration successful",
    });

  } catch (error) {
    console.error("Registration Error:", error);
    res.status(500).json({ msg: "Server error" });
  }
});

/* ===============================
   ⭐ Contact Form API
================================ */
router.post("/contact", async (req, res) => {
  const start = Date.now();

  try {
    const { fullName, city, email, phone, message } = req.body;

    if (!fullName || !city || !email || !phone) {
      return res.status(400).json({ msg: "Please fill all required fields" });
    }

    await Contact.create({
      fullName,
      city,
      email,
      phone,
      message,
    });

    console.log("Contact saved in", Date.now() - start, "ms");

    // 🚀 Respond immediately
    res.status(201).json({
      msg: "Message sent successfully!",
    });

  } catch (error) {
    console.error("Contact Error:", error);
    res.status(500).json({ msg: "Server error" });
  }
});

module.exports = router;
