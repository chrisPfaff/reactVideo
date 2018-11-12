const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: "Please enter a valid name"
  }
});

module.exports = mongoose.model("User", UserSchema);
