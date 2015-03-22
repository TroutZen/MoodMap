var express = require('express');
var path 		= require('path');

module.exports = function(app){
	
	// serve from client/dist
	app.use(express.static(path.join(__dirname, '../../client/dist')));

};