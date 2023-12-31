require("dotenv").config();
const express = require("express");
const connectDB = require("./db");
const cors = require("cors");
const { ticketConfigRoute } = require("./Routes/TicketConfig.route");
const app = express();
app.use(express.json());
app.use(cors());

connectDB();

const port = 8008;
app.get("/", (req, res) => {
  res.send("Shohag paribahan server is running");
});

app.use("/admin/config", ticketConfigRoute);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
