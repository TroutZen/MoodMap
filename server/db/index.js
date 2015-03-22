var mongoose = require('mongoose');
var User 		 = require('../models/user');

module.exports = function(){
	// server and mongoDB connection
	var mongooseUri  = process.env.MONGOOSE || "mongodb://ds045011.mongolab.com:45011/moodmap";

	// connect to mongo instance
	mongoose.connect(mongooseUri, {
		user: 'admin',
		pass: 'moodmap'
	});

	// connect to db
	var db = mongoose.connection;
	db.once('open', function(){
		console.log('connected to db');
	});

	db.on('error', function (err) {
		console.log('connection error', err);
	});

	// [Warning] just for testing
	// function addTestUser(){
	// 	var user = new User();
	// 	user.username = 'testtest',
	// 	user.password = 'qc5de4f5'

	// 	user.save(function(err){
	// 		if (err) console.log(err);
	// 		else {
	// 			console.log('user saved');
	// 		}
	// 	})
	// }
	
};


