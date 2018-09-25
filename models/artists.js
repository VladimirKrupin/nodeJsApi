var dbo = require('../db');
var ObjectID = require('mongodb').ObjectID;

exports.all = function (cb) {
  dbo.get().collection('artists').find().toArray(function (err, docs) {
    cb(err,docs);
  })
};

exports.findById = function (id, cb) {
  dbo.get().collection('artists').find({ _id: ObjectID(id)}).toArray(function (err, docs) {
    cb(err,docs);
  });
};

exports.create = function (userData, cb) {
  dbo.get().collection('artists').insertOne(userData, function (err) {
    cb(err);
  });
};

exports.update = function (id,userData, cb) {
  dbo.get().collection("artists").updateOne({ _id: ObjectID(id)},{$set:userData}, function(err) {
    cb(err);
  });
};

exports.delete = function (id, cb) {
  dbo.get().collection("artists").deleteOne({ _id: ObjectID(id)}, function(err) {
    cb(err);
  });
};