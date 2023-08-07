require("dotenv").config();
const express = require("express");

const connectDB = require("./db");
const app = express();

connectDB();

const port = 8008;
app.get("/", (req, res) => {
  res.send("Shohag paribahan server created");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
