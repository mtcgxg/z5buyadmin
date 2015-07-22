'use strict';

var tools = require('./tools');
var _ = require('lodash');


exports.getProvince = function (provinceId) {
    return tools.requestWrap({
        url: tools.buildUrl('/provinces/' + provinceId),
        method: 'GET',
        json: true
    });
};

exports.getCity = function (cityId) {
    return tools.requestWrap({
        url: tools.buildUrl('/cities/' + cityId),
        method: 'GET',
        json: true
    });
};

exports.getDist = function (distId) {
    return tools.requestWrap({
        url: tools.buildUrl('/areas/' + distId),
        method: 'GET',
        json: true
    });
};


exports.getChannel = function (channelId) {
    return tools.requestWrap({
        url: tools.buildUrl('/channels/' + channelId),
        method: 'GET',
        json: true
    });
};
