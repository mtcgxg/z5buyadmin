'use strict';

/**
 * Module dependencies.
 */
var passport = require('passport');

module.exports = function(app) {
	// User Routes
	var users = require('../../app/controllers/users.server.controller');

	app.route('/auth/signin').post(users.signin);

	// Finish by binding the user middleware
	app.param('userId', users.userByID);
};