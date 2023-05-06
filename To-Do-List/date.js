
module.exports.getdate= getdate;
module.exports.getday = getday;

function getdate() {
  var today = new Date();
  var options = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };

  var day = today.toLocaleDateString("en-US", options);
  return day
}

function getday() {
  var today = new Date();
  var options = {
    weekday: "long"
  };

  var day = today.toLocaleDateString("en-US", options);
  return day;
}