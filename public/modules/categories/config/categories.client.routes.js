'use strict';

//Setting up route
angular.module('categories').config(['$stateProvider',
    function ($stateProvider) {
        // People state routing
        $stateProvider.
            state('createCategory', {
                url: '/categories/create',
                templateUrl: 'modules/categories/views/create.categories.client.view.html'
            }).
            state('updateCategory', {
                url: '/categories/:categoryId/update',
                templateUrl: 'modules/categories/views/update.categories.client.view.html'
            }).
            state('listCategory', {
                url: '/categories/list',
                templateUrl: 'modules/categories/views/list.categories.client.view.html'
            });
    }
]);
