'use strict';

var utils = require('../utils/writer.js');

const express = require('express');
const router = express.Router();
const Book = require('../Models/Books.js')

router.post('/addBook', (req, res) => {
    console.log(req.body)
    const book = {
      title: req.body.title,
      author: req.body.title,
      category: req.body.category,
      status: req.body.status
    }
    Book.create(book)
    .then(newBook => {
      res.status(200).json(newBook)
    }).catch(err => {
      res.sendStatus(404)
    })
});

router.get('/books', (req, res, next) => {
    Book.find().then((bookDB) => {
      const status = bookDB.filter(function(hasStatus) {
        
      })
      if (req.params.status === 'Pending'){
        res.json(bookDB)
      }
      else {
        res.json(bookDB)
      }
    }).catch(err => {
      console.log(err)
    })
});


module.exports.deletePet = function deletePet (req, res, next, bookId, api_key) {
  Book.deletePet(bookId, api_key)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

router.get('/getByStatus/:id', (req, res) => {
  console.log(req.params.status)
  Book.find(req.params.status)
    .then(function (response) {
      res.json( response);
    })
    .catch(function (response) {
      res.json(response);
    });
});

module.exports.findPetsByTags = function findPetsByTags (req, res, next, tags) {
  Book.findPetsByTags(tags)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPetById = function getPetById (req, res, next, bookId) {
  Book.getPetById(bookId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updatePet = function updatePet (req, res, next, body) {
  Book.updatePet(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updatePetWithForm = function updatePetWithForm (req, res, next, bookId) {
  Book.updatePetWithForm(bookId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports = router