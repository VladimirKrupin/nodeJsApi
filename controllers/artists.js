var Artists = require('../models/artists');

exports.all = function (req, res) {
  Artists.all(function (err, docs) {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    }
    res.send(docs);
  })
};

exports.findById = function (req, res) {
  Artists.findById(req.params.id, function (err, docs) {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    }
    res.send(docs);
  })
};

exports.create = function (req, res) {
  var artist = {
    name: req.body.name
  };
  Artists.create(artist, function (err) {
  if (err) {
    console.log(err);
    res.sendStatus(500);
  }
  res.send(artist);
  })
};

exports.update = function (req, res) {
  var artist = {
    name: req.body.name
  };
  Artists.update(req.params.id, artist, function (err) {
    if (err) throw err;
    res.sendStatus(200);
  })
};

exports.delete = function (req, res) {
  Artists.delete(req.params.id, function (err) {
    if (err) throw err;
    res.sendStatus(200);
  })
};