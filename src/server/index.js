const express = require("express");
const path = require("path");
const os = require("os");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const User = require("../models/User");

require("dotenv").config({ path: ".env" });

//import routes from '...routes'

const app = express();

//import mongo uri from env file

//set routes
app.use(express.static("dist"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

console.log(process.env.DATABASE);

mongoose.connect(process.env.DATABASE);

mongoose.Promise = global.Promise;

mongoose.connection.on("error", err => {
  console.log("connected");
  console.error(err);
});

// const newUser = new User({ name: "chris pfaffss" });

// newUser.save(err => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("user created");
//   }
// });

app.get("/api/pooper", (req, res) => {
  res.send({ username: os.userInfo().username });
});

//set mongo connection

app.listen(8080, () => {
  console.log("Listening on port 8080");
});
