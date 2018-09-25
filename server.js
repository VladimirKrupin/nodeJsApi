var express = require('express');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb');

var app = express();
var db;



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req,res) {
  res.send("Hello Api");
});

var artists = [
  {
    id: 1,
    name: 'guf'
  },
  {
    id: 2,
    name: 'basta'
  },
  {
    id: 3,
    name: 'korz'
  },
];

app.get("/artists", function (req,res) {
  res.send(artists);
});

app.get("/artists/:id", function (req,res) {
  var artist = artists.find(function (artist){
    return artist.id === Number(req.params.id);
  });
  res.send(artist.name);
});


app.post("/artists/", function (req,res) {
  var artist = {
    id: Date.now(),
    name: req.body.name
  };
  artists.push(artist);
  res.send(artist);
});

app.put("/artists/:id", function (req,res) {
  var artist = artists.find(function (artist){
    return artist.id === Number(req.params.id);
  });
  artist.name = req.body.name;
  res.sendStatus(200);
});

app.delete("/artists/:id", function (req,res) {
  artists = artists.filter(function (artist) {
    return artist.id !== Number(req.params.id);
  });
  res.sendStatus(200);
});


let port = 3012;

app.listen(port, function () {
  console.log("Api app started! on port " + port);
});