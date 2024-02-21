'use strict';

var utils = require('../utils/writer.js');

const express = require('express');
const router = express.Router();
const Book = require('../Models/Books.js')

router.post('/addPet', (req, res, next, body) => {
    const book = {
      title: req.body.title,
      author: req.body.title,
      category: req.body.category,
      status: req.body.status
    };

    Book.create(book).then(newBook => {
      res.json(newBook)
    }).catch(err => {
      res.json({err, success: false})
    })
});

module.exports.bookAuthorNameGET = function bookAuthorNameGET (req, res, next, authorName) {
  Book.bookAuthorNameGET(authorName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deletePet = function deletePet (req, res, next, bookId, api_key) {
  Book.deletePet(bookId, api_key)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.findPetsByStatus = function findPetsByStatus (req, res, next, status) {
  Book.findPetsByStatus(status)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

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
