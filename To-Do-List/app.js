const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const date=require(__dirname + "/date.js")


app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

var items=[];

app.get("/", function (req, res) {
  
  let day=date.getdate();
  res.render("list.ejs", { day:day,items:items});
});

app.post("/", function (req, res) {
  var newitem = req.body.newitem;

  items.push(newitem);
  res.redirect("/");
});

app.listen(3000, function () {
  console.log(
    " \n * Running on http://localhost:3000/ \n * Press CTRL+C to quit"
  );
});
