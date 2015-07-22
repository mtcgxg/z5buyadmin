'use strict';

//Setting up route
angular.module('stores').config(['$stateProvider',
    function ($stateProvider) {
        // People state routing
        $stateProvider.
            state('listStore', {
                url: '/stores/list',
                templateUrl: 'modules/stores/views/list.stores.client.view.html'
            });
    }
]);
