var User = require('./userController.js');

module.exports = function(router){

	router.route('/users')
		.post(User.create)
		.get(User.list);

	router.route('/users/:userId')
		.put(User.update)
		.delete(User.delete)
		.get(User.fetch);
};
