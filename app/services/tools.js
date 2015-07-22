'use strict';

var ServiceReqError = require('../errors/ServiceReqError');
var serviceConfig = require('../configs/remoteServiceConfig');
var request = require('request');
var Q = require('q');

/**
 *
 * @param protocal
 * @param domain
 * @param path
 * @param options
 * options.port     端口
 * @returns {string}
 */
exports.buildUrl = function(path) {
    var port = serviceConfig.port || 80;
    return serviceConfig.protocal + '://' + serviceConfig.domain + ':' + port + path;
};

/**
 *
 * @param requestOptions
 * @param successCb
 * @param errCb
 */
exports.requestWrap = function (requestOptions) {
    var deferred = Q.defer();

    request(requestOptions, function (err, res, body) {
        if (err) {
            deferred.reject(new ServiceReqError('ServiceRequestError', 500, err));
            return;
        }
        if (res.statusCode !== 200) {
            deferred.reject(new ServiceReqError('ServiceRequestError', res.statusCode, body || 'error'));
            return;
        }
        deferred.resolve(body);
    });

    return deferred.promise;
};
