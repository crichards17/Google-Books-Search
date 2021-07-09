const db = require("../models");

module.exports = {
    findAll: function(req, res) {
      db.GoogleBook
        .find(req.query)
        .sort({ date: -1 })
        .then(dbBook => res.json(dbBook))
        .catch(err => res.status(422).json(err));
    },
    findOne: function(req, res) {
      db.GoogleBook
        .findOne({id: req.params.id})
        .then(dbBook => res.json(dbBook))
        .catch(err => res.status(422).json(err));
    },
    save: function(req, res) {
      db.GoogleBook
        .create(req.body)
        .then(dbBook => res.json(dbBook))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
      db.GoogleBook
        .findById({ _id: req.params.id })
        .then(dbBook => dbBook.remove())
        .then(dbBook => res.json(dbBook))
        .catch(err => res.status(422).json(err));
    }
  };