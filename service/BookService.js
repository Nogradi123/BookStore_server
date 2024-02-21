'use strict';


/**
 * Add a new book to the store
 *
 * body Book Pet object that needs to be added to the store
 * no response value expected for this operation
 **/
exports.addPet = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Returns all books based on Author Name
 *
 * authorName String name of author to pass in to retieve books
 * returns ApiResponse
 **/
exports.bookAuthorNameGET = function(authorName) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : 0,
  "type" : "type",
  "message" : "message"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Deletes a pet
 *
 * bookId Long Book id to delete
 * api_key String  (optional)
 * no response value expected for this operation
 **/
exports.deletePet = function(bookId,api_key) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Finds books by status
 * Multiple status values can be provided with comma separated strings
 *
 * status List Status values that need to be considered for filter
 * returns List
 **/
exports.findPetsByStatus = function(status) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "photoUrls" : [ "photoUrls", "photoUrls" ],
  "name" : "The bay of pigs",
  "id" : 9007199254740991,
  "category" : {
    "name" : "Fiction",
    "id" : "b0cd0482-433d-42c5-bf4e-5a5354241971"
  },
  "status" : "available"
}, {
  "photoUrls" : [ "photoUrls", "photoUrls" ],
  "name" : "The bay of pigs",
  "id" : 9007199254740991,
  "category" : {
    "name" : "Fiction",
    "id" : "b0cd0482-433d-42c5-bf4e-5a5354241971"
  },
  "status" : "available"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Finds Books by tags
 * Muliple tags can be provided with comma separated strings. Use\\ \\ tag1, tag2, tag3 for testing.
 *
 * tags List Tags to filter by
 * returns List
 **/
exports.findPetsByTags = function(tags) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "photoUrls" : [ "photoUrls", "photoUrls" ],
  "name" : "The bay of pigs",
  "id" : 9007199254740991,
  "category" : {
    "name" : "Fiction",
    "id" : "b0cd0482-433d-42c5-bf4e-5a5354241971"
  },
  "status" : "available"
}, {
  "photoUrls" : [ "photoUrls", "photoUrls" ],
  "name" : "The bay of pigs",
  "id" : 9007199254740991,
  "category" : {
    "name" : "Fiction",
    "id" : "b0cd0482-433d-42c5-bf4e-5a5354241971"
  },
  "status" : "available"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Find book by ID
 * Returns a single pet
 *
 * bookId Long ID of book to return
 * returns Book
 **/
exports.getPetById = function(bookId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "photoUrls" : [ "photoUrls", "photoUrls" ],
  "name" : "The bay of pigs",
  "id" : 9007199254740991,
  "category" : {
    "name" : "Fiction",
    "id" : "b0cd0482-433d-42c5-bf4e-5a5354241971"
  },
  "status" : "available"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update an existing book
 *
 * body Book Pet object that needs to be added to the store
 * no response value expected for this operation
 **/
exports.updatePet = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Updates a book in the store with form data
 *
 * bookId Long ID of book that needs to be updated
 * no response value expected for this operation
 **/
exports.updatePetWithForm = function(bookId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

