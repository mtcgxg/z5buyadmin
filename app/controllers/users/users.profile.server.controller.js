'use strict';

/**
 * Module dependencies.
 */
var _ = require('lodash'),
	errorHandler = require('../errors.server.controller.js');
/**
 * Update user details
 */
exports.update = function(req, res) {
	// Init Variables
	var user = req.user;
	var message = null;

	res.send('TODO update user profile');
};

/**
 * Send User
 */
exports.me = function(req, res) {
	res.json(req.user || null);
};