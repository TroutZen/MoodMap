var mongoose = require('mongoose');

module.exports = function(){
	// server and mongoDB connection
	var mongooseUri  = process.env.MONGOOSE || "mongodb://ds045011.mongolab.com:45011/moodmap";

	// connect to mongo instance
	mongoose.connect(mongooseUri);

	// connect to db
	var db = mongoose.connection;
	db.once('open', function(){
		console.log('connected to db');
	});

	db.on('error', function (err) {
		console.log('connection error', err);
	});

	
};


