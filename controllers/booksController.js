const db = require("../models");

module.exports = {
    findAll: function(req, res) {
      db.Book
        .find(req.query)
        .sort({ date: -1 })
        .then(dbBook => res.json(dbBook))
        .catch(err => res.status(422).json(err));
    },
    findOne: function(req, res) {
      db.Book
        .findOne({id: req.params.id})
        .then(dbBook => res.json(dbBook))
        .catch(err => res.status(422).json(err));
    },
    save: function(req, res) {
      db.Book
        .create(req.body)
        .then(dbBook => res.json(dbBook))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
      db.Book
        .findById({ _id: req.params.id })
        .then(dbBook => dbBook.remove())
        .then(dbBook => res.json(dbBook))
        .catch(err => res.status(422).json(err));
    }
  };