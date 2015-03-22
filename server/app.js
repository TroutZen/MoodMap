var express  = require('express');

var app  = express();
var port = process.env.PORT || 3000;

// routes
require('./api')(app);

// express config/middleware
require('./express')(app);

// db config
require('./db')();

// listen on port 
app.listen(port, function(){
	console.log('Server listening on port', port);
});



// var express 			= require('express'),
// 		path    			= require('path'),
//     expressJwt 		= require('express-jwt'),
//     mongoose 			= require('mongoose'),
//     morgan 				= require('morgan'),
//     bodyParser 		= require('body-parser'),
//     unless 				= require('express-unless'),
//     NotFoundError = require(path.join(__dirname, "errors", "NotFoundError.js")),
//     jwt 					= require('jsonwebtoken');

// set the secret to sign and verify the jwt
// var secret = "samadhi";


