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


// salt/hash the pw
UserSchema.pre('save', function(next){
	var user = this;

	// only hash the pw if it has been modified or is new
	if (!user.isModified('password')) {
		return next();
	}

	// generate salt
	bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt){
		if (err) {
			return next(err);
		}

		// hash the pw along with the salt
		bcrypt.hash(user.password, salt, function(err, hash){
			if (err) return next(err);
			// override the cleartext password with hashed pw
			user.password = hash;
			next();
		});
	});
});

// compare supplied password with pw in db
UserSchema.methods.comparePassword = function(candidatePassword, cb) {
	bcrypt.compare(candidatePassword, this.password, function(err, isMatch){
		if (err) return cb(err);
		cb(null, isMatch);
	});
};

