'use strict';

/**
 * Module dependencies.
 */
var _ = require('lodash'),
    Q = require('q'),
    errorHandler = require('./errors.server.controller'),
    storeService = require('../services/store.service'),
    commonService = require('../services/common.service.js');

//新建商铺
exports.create = function (req, res) {
    var storeInfo = req.body;
    storeService.create(storeInfo)
        .then(function (result) {
            if (result.code !== 0) {
                res.status(200).send(result);
                return;
            }
            res.send(result.store);
        })
        .catch(function (err) {
            res.status(500).send(err.message);
        })
        .done();
};

//获取商铺列表
exports.list = function (req, res) {
    storeService.list()
        .then(function (result) {
            if (result.code !== 0) {
                throw new Error(result.message);
            }
            var storesPromise = [];
            result.stores.forEach(function(item) {
                storesPromise.push(resolveStore(item));
            });
            Q.all(storesPromise)
                .then(function (resolvedStores) {
                    return res.send(resolvedStores);
                })
        })
        .catch(function (err) {
            res.status(500).send(err.message);
        })
        .done();
};

//根据ID获取商铺
exports.findById = function (req, res) {
    storeService.findById(req.params.storeId)
        .then(function (result) {
            if (result.code !== 0) {
                throw new Error(result.message);
            }
            res.send(result.store);
        })
        .catch(function (err) {
            res.status(500).send({
                message: errorHandler.getErrorMessage(err)
            });
        })
        .done();
};

//编辑商铺
exports.update = function (req, res) {
    storeService.edit(req.params.storeId, req.body)
        .then(function (result) {
            if (result.code !== 0) {
                throw new Error(result.message);
            }
            res.send(result.message);
        })
        .catch(function (err) {
            res.status(500).send({
                message: errorHandler.getErrorMessage(err)
            });
        })
        .done();
};

//删除商铺
exports.delete = function (req, res) {
    storeService.del(req.params.storeId)
        .then(function (result) {
            if (result.code !== 0) {
                throw new Error(result.message);
            }
            res.send(result.message);
        })
        .catch(function (err) {
            res.status(500).send({
                message: errorHandler.getErrorMessage(err)
            });
        })
        .done();
};

var resolveStore = function (stores) {
    var deferrd = Q.defer();

    Q.all([
        stores,
        commonService.getProvince(stores.province_id),
        commonService.getCity(stores.city_id),
        commonService.getDist(stores.area_id),
        commonService.getChannel(stores.store_channel_id)
    ]).spread(function (stores, provinceResult, cityResult, distResult, channelResult) {
        if (provinceResult.code !== 0
            || cityResult.code !== 0
            || distResult.code !== 0
            || channelResult.code !== 0 ) {
            throw new Error(result.message);
        }

        stores.province = provinceResult.province.name;
        stores.city = cityResult.city.name;
        stores.dist = distResult.area.name;
        stores.channel = channelResult.channel.name;

         deferrd.resolve(stores);
    }).catch(function (err) {
        deferrd.reject(err);
    }).done();


    return deferrd.promise;
};
