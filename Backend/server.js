require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const registerRoute = require("./routes/register");
const contactRoute = require("./routes/Contact");
const callbackRoute = require("./routes/callback");

const app = express();
const PORT = process.env.PORT || 5000;

/* =========================
   CONNECT DATABASE (ONCE)
========================= */
(async () => {
  console.log("Connecting DB at:", new Date());
  await connectDB();
  console.log("DB connected at:", new Date());

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})();

/* =========================
   CORS
========================= */
const allowedOrigins = [
  "http://localhost:3000",
  "https://softmastertech.com",
  "https://www.softmastertech.com"
];

app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");

  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

app.use(express.json());

/* =========================
   ROUTES
========================= */
app.use("/api/register", registerRoute);
app.use("/api/contact", contactRoute);
app.use("/api/callback", callbackRoute);

// Health check
app.get("/", (req, res) => {
  res.send({ status: "Backend working" });
});
