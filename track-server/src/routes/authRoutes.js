const express = require("express");
const mongoose = require("mongoose");
const User = mongoose.model("User");

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = new User({ email, password });
    await user.save();

    res.send("Post requested!");
  } catch (error) {
    return res.status(422).send(error.message);
  }
});

// Fix app.use() requires a middleware function
module.exports = router;
