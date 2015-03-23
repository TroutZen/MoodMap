var router = require('express').Router();

module.exports = function(app){

	// require('./auth')(router);
	require('./user')(router);
	app.use('/api', router);

};