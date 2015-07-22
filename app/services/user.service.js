'use strict';

var Q = require('q'),
	tools = require('./tools');

exports.signup = function (user) {
	var deferred = Q.defer();

	tools.requestWrap({
		method: 'POST',
		url: tools.buildUrl('/admins'),
		form: user,
		json: true
	}, function (result) {
		deferred.resovlve(result);
	}, function (err) {
		deferred.reject(err);
	});

	return deferred.promise;
};

exports.signin = function (loginInfo) {
	var deferred = Q.defer();

	tools.requestWrap({
		method: 'POST',
		url: tools.buildUrl('/admins/login'),
		form: loginInfo,
		json: true
	}, function (result) {
		deferred.resolve(result);
	}, function (err) {
		deferred.reject(err);
	});

	return deferred.promise;
};

exports.getById = function (userId) {
	var deferred = Q.defer();

	tools.requestWrap({
		method: 'GET',
		url: tools.buildUrl('/admins/' + userId),
		json: true
	}, function (result) {
		deferred.resolve(result);
	}, function (err) {
		deferred.reject(err);
	});

	return deferred.promise;
};