const mongoose = require("mongoose");

var Customer = mongoose.model("Customer", {
  first_name: String,
  last_name: String,
  gender: String,
  age: Number,
  email: String
});

module.exports = { Customer };
