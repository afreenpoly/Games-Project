app.use(express.static("static"))


app.get("/", function (req, res) {
  res.sendFile(__dirname + "/signup.html");
});