exports.getFriday = function (req, res) {
  var question = req.body.question;
  res.send("server answer - " + question);
};