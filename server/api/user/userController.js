var User = require('../../models/user');

// var UserSchema = new Schema({
// 	username: {
// 		type: String,
// 		require: true,
// 		unique: true,
// 		lowercase: true
// 	},

// 	password: {
// 		type: String,
// 		required: true
// 	},

// 	firstname: String,
// 	lastname: String,
// 	age: Number,
// 	dob: Date,
// 	profile_pic: String,
// 	symptoms: [String],
// 	diagnoses: [String]
// 	// TODO: Add nutrition with diet schema, supplement schema
// 	// TODO: add fitness property
// 	// TODO: add mind-body property
// 	// TODO: add milestones/goals
// 	// TODO: add bloodwork/health metrics
// });

var userController = {};

// create new user
userController.create = function(req, res, next){
	var user = req.body;
	User.create(user, function(err, user){
		if (err) {
			console.log('ERROR <userController> could not create user');
			res.status(500);
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
			res.status(500);
		} else {
			res.json(user);
			console.log('fetched user information', user);
		}
	});
};

userController.update = function(req, res, next) {
	var userId = req.params.userId;

	// changes is an object of properties to update
	var changes = req.body;

	User.findByIdAndUpdate(userId, changes, function(err, user){
		if (err) {
			console.log('ERROR <userController> could not update user');
			res.status(500);			
		}
	});
};

module.exports = userController;


