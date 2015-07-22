'use strict';

module.exports = function(app) {
    var category= require('../../app/controllers/categories.server.controller');
    //list route
    app.route('/categories').get(category.list);
    //create route
    app.route('/categories').post(category.create);
    //findById
    app.route('/categories/:categoryId').get(category.findById);
    //update
    app.route('/categories/:categoryId').put(category.update);
    //delete
    app.route('/categories/:categoryId').delete(category.delete);
};
