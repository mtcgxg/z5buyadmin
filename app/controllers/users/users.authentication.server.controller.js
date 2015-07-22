'use strict';

/**
 * Module dependencies.
 */
var _ = require('lodash'),
	errorHandler = require('../errors.server.controller'),
	userService = require('../../services/user.service');

/**
 * Signup
 */
exports.signup = function(req, res) {
	var user = res.body;

	userService.signup(user)
			.then(function (result) {
				res.json(result);
			})
			.catch(function (err) {
				res.status(500).send(err.message);
			})
			.done();
};

/**
 * Signin after passport authentication
 */
exports.signin = function(req, res, next) {
	var loginInfo = req.body;

	userService.signin(loginInfo)
		.then(function (result) {
			res.json(result);
		})
		.catch(function (err) {
			res.status(500).send(err.message);
		})
		.done();
};

/**
 * Signout
 */
exports.signout = function(req, res) {
	
};