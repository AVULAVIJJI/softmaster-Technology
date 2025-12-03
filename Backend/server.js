require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const registerRoute = require("./routes/register");
const contactRoute = require("./routes/Contact");
const callbackRoute = require("./routes/callback"); 

const app = express();
const PORT = process.env.PORT || 5000;

// Connect DB
connectDB();

// Middleware
app.use(
  cors({
    origin: "https://your-frontend-name.vercel.app",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use(express.json());

// Routes
app.use("/api/register", registerRoute);
app.use("/api/contact", contactRoute);
app.use("/api/callback", callbackRoute)

// Test Route
app.get("/", (req, res) => {
  res.send({ status: "Backend working " });
});

// Server Start
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
