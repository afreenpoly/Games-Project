var items=[];

app.get("/", function (req, res) {
  var today = new Date();
  var options = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };

  var day = today.toLocaleDateString("en-US", options);
  res.render("list", { day:day,items:items});
});

app.post("/", function (req, res) {
  var newitem = req.body.newitem;

  items.push(newitem);
  res.redirect("/");
});