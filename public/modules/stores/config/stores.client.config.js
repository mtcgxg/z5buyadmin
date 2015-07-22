'use strict';

// Store module config
angular.module('stores').run(['Menus',
	function(Menus) {
		// Config logic
		// ...
		Menus.addSubMenuItem('topbar','products','商铺列表','stores/list');
	}
]);
