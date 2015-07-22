'use strict';

//Setting up route
angular.module('orders').config(['$stateProvider',
	function($stateProvider) {
		// Orders state routing
		$stateProvider.
		state('offers', {
			url: '/offers',
			templateUrl: 'modules/orders/views/offers.client.view.html'
		}).
		state('orders', {
			url: '/orders',
			templateUrl: 'modules/orders/views/orders.client.view.html'
		}).
		state('issues', {
			url: '/issues',
			templateUrl: 'modules/orders/views/issues.client.view.html'
		});

	}
]);
