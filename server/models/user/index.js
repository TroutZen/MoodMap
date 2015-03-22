var mongoose  = require('mongoose');
var bcrypt 		= require('bcrypt');
var Schema 		= mongoose.Schema;

var SALT_WORK_FACTOR = 10;

var UserSchema = new Schema({
	username: {
		type: String,
		require: true,
		unique: true,
		lowercase: true
	},

	password: {
		type: String,
		required: true
	},

	firstname: String,
	lastname: String,
	age: Number,
	dob: Date,
	profile_pic: String,
	symptoms: [String],
	diagnoses: [String]
});