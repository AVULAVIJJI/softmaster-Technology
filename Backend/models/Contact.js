const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  fullName: { type: String, required: true, trim: true },
  email:    { type: String, required: true, trim: true },
  mobile:   { type: String, required: true, trim: true },
  subject:  { type: String, required: true, trim: true },
  message:  { type: String, trim: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Contact", ContactSchema);
