const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const dbConnection = await mongoose.connect(
      `mongodb+srv://shohagh_paribahan:q22IvB6wTZp8qecE@cluster0.viq6r.mongodb.net/shohagh_paribahan`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("MongoDB connected...");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
