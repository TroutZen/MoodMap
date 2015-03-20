var express = require('express');
var path    = require('path');

var port 		= process.env.PORT || 3000;

// instantiate our express instance
var app = express();

// serve from client/dist
app.use(express.static(path.join(__dirname, '../client/dist')));
// app.use(require('MIDDLEWARE_PATH'));

// you can require all your routes at once just point to directory
// app.use(require('CONTROLLER_PATH'));

// app.get('/', function(res, req, next){
// 	console.log('root route');
// });

// listen on port 
app.listen(port, function(){
	console.log('listening on port', port);
});