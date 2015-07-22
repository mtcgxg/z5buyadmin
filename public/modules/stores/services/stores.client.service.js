'use strict';

// Categories service used for communicating with the Categories REST endpoint
angular.module('stores').factory('Stores', ['$resource',
    function($resource) {
        return $resource('stores/:storeId', {
            storeId: '@id'
        }, {
            update: {
                method: 'PUT'
            }
        });
    }
]);
