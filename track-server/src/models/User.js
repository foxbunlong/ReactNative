const mongoose = require("mongoose");

// Define properties going to have in User model
const userScheme = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

mongoose.model("User", userScheme);
