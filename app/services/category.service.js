'use strict';

var tools = require('./tools');
var _ = require('lodash');

exports.create = function (categoryInfo) {
    return tools.requestWrap({
        url: tools.buildUrl('/categories'),
        method: 'POST',
        form: categoryInfo,
        json: true
    });
};

exports.list = function (filter, orderBy) {
    return tools.requestWrap({
        url: tools.buildUrl('/categories'),
        method: 'GET',
        json: true
    });
};

exports.findById = function(id) {
    return tools.requestWrap({
        url: tools.buildUrl('/categories/' + id),
        method: 'GET',
        json: true
    });
};

exports.edit = function(id, newCategory) {
    return tools.requestWrap({
        url: tools.buildUrl('/categories/' + id ),
        method: 'PUT',
        form: newCategory,
        json: true
    });
};

exports.del = function(id) {
    return tools.requestWrap({
        url: tools.buildUrl('/categories/' + id),
        method: 'DELETE',
        json: true
    });
};
