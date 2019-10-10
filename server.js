const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = 4000;
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://127.0.0.1:27017/todos", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const connection = mongoose.connection;

connection.once("open", function() {
  console.log("mongoDB connection is established successfully");
});

app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});
