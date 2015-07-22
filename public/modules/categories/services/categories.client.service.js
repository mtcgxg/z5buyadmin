'use strict';

// Categories service used for communicating with the Categories REST endpoint
angular.module('categories').factory('Categories', ['$resource',
    function($resource) {
        return $resource('categories/:categoryId', {
            categoryId: '@id'
        }, {
            update: {
                method: 'PUT'
            }
        });
    }
]);
