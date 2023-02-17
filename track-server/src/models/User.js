const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

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

// Pre-save hook
userScheme.pre("save", function (next) {
  // To access to this (user) to save, change '() =>' to 'function()'
  // Function to call before data is saved in database
  const user = this;
  if (!user.isModified("password")) {
    return next();
  }

  // 1st param: how complex the salt is
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }

    bcrypt.hash(user.password, salt, (err, encrypted) => {
      if (err) {
        return next(err);
      }
      user.password = encrypted;
      next();
    });
  });
});

userScheme.methods.comparePassword = function (inputPassword) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(inputPassword, this.password, (err, isMatched) => {
      if (err) {
        return reject(err);
      }

      if (!isMatched) {
        return reject(false);
      }

      return resolve(true);
    });
  });
};

mongoose.model("User", userScheme);
