var User = require('../../models/user');

var userController = {};

// create new user
userController.create = function(req, res, next){
	var user = req.body;
	User.create(user, function(err, user){
		if (err) {
			console.log('ERROR <userController> could not create user');
			res.status(500).end();
		}
		else {
			res.json(user);
			console.log('created user', user);
		}
	});
};

// fetch user's data
userController.fetch = function(req, res, next) {
	var userId = req.params.userId;
	User.findById(userId, function(err, user){
		if (err) {
			console.log('ERROR <userController> could not fetch user');
			res.status(500).end();
		} else {
			res.json(user);
			console.log('fetched user information', user);
		}
	});
};

// update the user's profile data
userController.update = function(req, res, next) {
	var userId = req.params.userId;

	// changes is an object of properties to update
	var changes = req.body;

	// update the user
	User.findByIdAndUpdate(userId, changes, function(err, user){
		if (err) {
			console.log('ERROR <userController> could not update user');
			res.status(500).end();			
		} else {
			console.log('update successful for user');
			res.status(200);
		}
	});
};

// deletes the user from the db
userController.delete = function(){
	var userId = req.params.userId;
	
	// remove the user
	User.findByIdAndRemove(userId, function(err, user){
		if (err) {
			console.log('ERROR <userController> could not update user');
			res.status(500).end();
		} else {
			console.log('delete successful for user');
			res.status(200);
		}
	});	
};

// fetches the full list of the users
userController.list = function(){
	User.find({}, function(err, users){
		if (err) {
			console.log('ERROR <userController> could not update user');
			res.status(500).end();
		} else {
			console.log('fetch successful for all users');
			res.json(users);
		}
	});
};

module.exports = userController;
