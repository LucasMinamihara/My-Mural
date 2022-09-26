const express = require("express");
const app = express();
const PORT = 3003;
const path = require("path");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(PORT, () => {
  console.log("Server is running on port" + PORT);
});
