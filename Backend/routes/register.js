const express = require('express');
const router = express.Router();

const Registration = require('../models/Registration');
const Contact = require('../models/Contact'); // ✅ NEW Contact model

// ===============================
// ⭐ Registration API
// ===============================
router.post('/', async (req, res) => {
  try {
    const { name, email, mobile, course, message, termsAccepted } = req.body;

    if (!name || !email || !mobile || !course) {
      return res.status(400).json({ msg: "Please fill all required fields" });
    }

    const registration = new Registration({
      name,
      email,
      mobile,
      course,
      message,
      termsAccepted: !!termsAccepted
    });

    await registration.save();

    res.status(201).json({
      msg: "Registration successful",
      data: registration
    });

  } catch (error) {
    console.error("Registration Error:", error);
    res.status(500).json({ msg: "Server error" });
  }
});

// ===============================
// ⭐ Contact Form API
// ===============================
router.post('/contact', async (req, res) => {
  try {
    const { fullName, city, email, phone, message } = req.body;

    if (!fullName || !city || !email || !phone) {
      return res.status(400).json({ msg: "Please fill all required fields" });
    }

    const contactData = new Contact({
      fullName,
      city,
      email,
      phone,
      message
    });

    await contactData.save();

    res.status(201).json({
      msg: "Message sent successfully!",
      data: contactData
    });

  } catch (error) {
    console.error("Contact Error:", error);
    res.status(500).json({ msg: "Server error" });
  }
});

module.exports = router;
