const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const https = require("https");

app.use(bodyparser.urlencoded({ extended: true }));

app.use(express.static("public"));
   


app.get("/", function (req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.listen(3000, function () {
  console.log(
    " \n * Running on http://localhost:3000/ \n * Press CTRL+C to quit"
  );
});
