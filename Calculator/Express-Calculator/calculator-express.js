const express = require("express");
const bodyparser = require("body-parser");

const app = express();
app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;
  res.send("The Result is " + result);
});

app.listen(4000, function () {
  console.log(
    " \n * Running on http://localhost:4000/ \n * Press CTRL+C to quit"
  );
});
