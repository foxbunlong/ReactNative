// Models
require("./models/User");

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");

mongoose.set("strictQuery", true);

const app = express();
app.use(bodyParser.json()); // Put this line 1st to handle json correctly
app.use(authRoutes);

// const password = encodeURIComponent(
//     "abcdef@"
//   );

// Use Mongo to generate password, password with special char not work
const password = "bdlVGJ8WoZ096bOc";

const mongoUri = `mongodb+srv://admin:${password}@mongo-0.ejrbtt2.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(mongoUri);
mongoose.connection.on("connected", () => {
  console.log("Connected to mongo");
});
mongoose.connection.on("error", (err) => {
  console.log("Error connect to mongo", err);
});

app.get("/", (req, res) => {
  res.send("AAAAAAA");
});

app.listen(3000, () => {
  console.log("Listen on http://localhost:3000");
});
