const express = require("express");
const app = express();

const port = 8008;
app.get("/", (req, res) => {
  res.send("Shohag paribahan server created");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
