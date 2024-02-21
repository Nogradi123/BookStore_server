'use strict';

var path = require('path');
var http = require('http');
const db = require('./db');
const express = require('express');
let bodyParser = require('body-parser');

const MongoStore = require('connect-mongo')


var oas3Tools = require('oas3-tools');
var serverPort = 8085;

var app = express();
app.use(express.static(__dirname + '/controllers'))


// var expressAppConfig = oas3Tools.expressAppConfig(path.join(__dirname, 'api/openapi.yaml'), options);

app.use(bodyParser.urlencoded({
    extended: false
 }));
 
 app.use(bodyParser.json());

// Initialize the Swagger middleware
http.createServer(app).listen(serverPort, function () {
    console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
    console.log('Your database is connect', db)
    console.log('Swagger-ui is available on http://localhost:%d/docs', serverPort);
});

// Routes
const bookRoutes = require("./controllers/Book");

app.use('/book', bookRoutes)

module.exports = app