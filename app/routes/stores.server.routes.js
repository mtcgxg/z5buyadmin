'use strict';

module.exports = function(app) {
    var store= require('../../app/controllers/stores.server.controller');
    //list route
    app.route('/stores').get(store.list);
    //create route
    app.route('/stores').post(store.create);
    //findById
    app.route('/stores/:storeId').get(store.findById);
    //update
    app.route('/stores/:storeId').put(store.update);
    //delete
    app.route('/stores/:storeId').delete(store.delete);
};
