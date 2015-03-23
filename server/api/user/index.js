var User = require('./userController.js');

module.exports = function(router){
	// create user
	// update user
	// delete user
	// read user

	router.route('/users')
		.post(User.create)
		.get(User.list)

	router.route('/users/:userId')
		.put(User.update)
		.delete(User.delete)
		.get(User.fetch);





};