'use strict';

// Orders module config
angular.module('orders').run(['Menus',
	function(Menus) {
		// Config logic
		Menus.addMenuItem('topbar','订单管理','orders','dropdown',null,null,null,3);
		Menus.addSubMenuItem('topbar','orders','砍价单列表','offers');
		Menus.addSubMenuItem('topbar','orders','订单列表','orders');
		Menus.addSubMenuItem('topbar','orders','问题列表','issues');
		// ...
	}
]);
