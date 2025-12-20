const mongoose = require("mongoose");

let isConnected = false; // 👈 prevents multiple connections

const connectDB = async () => {
  if (isConnected) {
    console.log("MongoDB already connected");
    return;
  }

  try {
    const start = Date.now();
    console.log("Connecting MongoDB at:", new Date());

    await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 5000, // ⏱ prevents long 40 sec wait
    });

    console.log(
      "✅ MongoDB Connected Successfully in",
      Date.now() - start,
      "ms"
    );

    isConnected = true;
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
