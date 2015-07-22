'use strict';

//Setting up route
angular.module('products').config(['$stateProvider',
	function($stateProvider) {
		// Products state routing
		$stateProvider.
		state('products', {
			url: '/products',
			templateUrl: 'modules/products/views/products.client.view.html'
		});
	}
]);