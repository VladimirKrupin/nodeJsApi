var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var dbo = require('./db');
var artistsController = require('./controllers/artists');
var fridayController = require('./controllers/friday');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req,res) {
  res.send("Home");
});

app.get("/artists/", artistsController.all);

app.get("/artists/:id",  artistsController.findById);

app.post("/artists/", artistsController.create);

app.put("/artists/:id", artistsController.update);

app.delete("/artists/:id", artistsController.delete);

app.post("/getfriday/", fridayController.getFriday);

dbo.connect("mongodb://localhost:27017/", function(err) {
  if (err) throw err;
  app.listen(3012, function () {
    console.log("Api app started!");
  });
});