'use strict'

var express = require('express');
// var url = require('url');
var request = require('request');
var bodyParser = require('body-parser');
var reactions = require('./routes/reactions.js');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// choose whatever port we want to listen on
var port = process.env.PORT || 8080;

// middleware to use for all requests
// set the response headers
app.use(function(req, res, next) {
    // do logging
    res.setHeader("Access-Control-Allow-Origin", "*");
  	res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Save-Data");
  	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  	res.setHeader('Access-Control-Allow-Credentials', false);
    next(); // make sure we go to the next routes and don't stop here
});

app.use('/', reactions);

app.listen(port, function() {
	console.log('Magic happens on port ' + port);
});