'use strict';

// Products module config
angular.module('products').run(['Menus',
	function(Menus) {

		// Config logic
		Menus.addMenuItem('topbar','商品管理','products','dropdown',null,null,null,1);
		Menus.addSubMenuItem('topbar','products','商品列表','products');
		// ...
	}
]);
