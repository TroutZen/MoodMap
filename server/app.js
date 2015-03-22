var app  = require('express')();
var port = process.env.PORT || 3000;

// require in middleware
require('./config.js')(app);

// listen on port 
app.listen(port, function(){
	console.log('listening on port', port);
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


// connect to db
// var db = mongoose.connection;
// db.on('open', function(){
// 	console.log('connected to db');
// });


// middleware
// app.use(bodyParser());





// app.post('/login', function(req, res, next){
// 	if (req.body.username === 'user')
// });






// serve from client/dist
// app.use(express.static(path.join(__dirname, '../client/dist')));
// app.use(require('MIDDLEWARE_PATH'));

// you can require all your routes at once just point to directory
// app.use(require('CONTROLLER_PATH'));

// app.get('/', function(res, req, next){
// 	console.log('root route');
// });

