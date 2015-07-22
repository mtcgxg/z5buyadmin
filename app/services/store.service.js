'use strict';

var tools = require('./tools');
var _ = require('lodash');

exports.create = function (storeInfo) {
    return tools.requestWrap({
        url: tools.buildUrl('/guides/stores'),
        method: 'POST',
        form: storeInfo,
        json: true
    });
};

exports.list = function (filter, orderBy) {
    return tools.requestWrap({
        url: tools.buildUrl('/guides/stores'),
        method: 'GET',
        json: true
    });
};

exports.findById = function(id) {
    return tools.requestWrap({
        url: tools.buildUrl('/guides/stores/' + id),
        method: 'GET',
        json: true
    });
};

exports.edit = function(id, newStore) {
    return tools.requestWrap({
        url: tools.buildUrl('/guides/stores/' + id ),
        method: 'PUT',
        form: newStore,
        json: true
    });
};

exports.del = function(id) {
    return tools.requestWrap({
        url: tools.buildUrl('/guides/stores/' + id),
        method: 'DELETE',
        json: true
    });
};
