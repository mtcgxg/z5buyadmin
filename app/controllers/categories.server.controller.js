'use strict';

/**
 * Module dependencies.
 */
var _ = require('lodash'),
    errorHandler = require('./errors.server.controller'),
    categoryService = require('../services/category.service.js');

/**
 * Create a Category
 */
exports.create = function (req, res) {
    var categoryInfo = req.body;
    categoryService.create(categoryInfo)
        .then(function (result) {
            if (result.code !== 0) {
                res.status(200).send(result);
                return;
            }
            res.send(result.category);
        })
        .catch(function (err) {
            res.status(500).send(err.message);
        })
        .done();
};

/**
 * List ordered Category by filter
 */
exports.list = function (req, res) {
    categoryService.list()
        .then(function (result) {
            if (result.code !== 0) {
                throw new Error(result.message);
                return;
            }
            res.send(result.category_info);
        })
        .catch(function (err) {
            res.status(500).send(err.message);
        })
        .done();
};

//根据ID获取类目
exports.findById = function (req, res) {
    categoryService.findById(req.params.categoryId)
        .then(function (result) {
            if (result.code !== 0) {
                throw new Error(result.message);
            }
            res.send(result.category);
        })
        .catch(function (err) {
            res.status(500).send({
                message: errorHandler.getErrorMessage(err)
            });
        })
        .done();
};

//编辑类目
exports.update = function (req, res) {
    categoryService.edit(req.params.categoryId, req.body)
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

/**
 * Delete an Person
 */
exports.delete = function (req, res) {
    categoryService.del(req.params.categoryId)
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
