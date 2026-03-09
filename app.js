const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Kubernetes CI/CD version 3.o");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
