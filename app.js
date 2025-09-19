// app.js
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 8080;

app.use(bodyParser.json());

// 1. Simple GET request: /foo -> bar
app.get("/foo", (req, res) => {
  res.send("bar");
});

// 2. POST request: /hello -> Hello {name}!
app.post("/hello", (req, res) => {
  const name = req.body.name || "World";
  res.send(`Hello ${name}!`);
});

// 3. GET request: /kill -> stop server
app.get("/kill", (req, res) => {
  res.send("Shutting down...");
  console.log("Server shutting down...");
  process.exit(0); // exits container
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});