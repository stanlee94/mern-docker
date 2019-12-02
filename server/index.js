const express = require("express");
const numeral = require("numeral");
const mongoose = require("mongoose");

const app = express();

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(con => console.log("DB connection successful! 😝 "))
  .catch(err => console.log("DB connection failed! 🥵"));

app.get("/", (req, res) => {
  res.json({
    success: true,
    server: "express",
    port: process.env.PORT
  });
});

app.get("/price", (req, res) => {
  res.json({
    price: numeral(888888).format("0,0")
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}... 😍`);
});
