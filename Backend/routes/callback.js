const express = require("express");
const Callback = require("../models/Callback");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, mobile, course } = req.body;

    if (!name || !email || !mobile || !course) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newCallback = new Callback({ name, email, mobile, course });
    await newCallback.save();

    res.status(201).json({ message: "Request submitted successfully 👍" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error });
  }
});

module.exports = router;
