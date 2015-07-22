'use strict';

// People module config
angular.module('categories').run(['Menus',
	function(Menus) {
		// Config logic
		// ...
		Menus.addMenuItem('topbar','类目管理','categories','dropdown',null,null,null,4);
		Menus.addSubMenuItem('topbar','categories','类目列表','categories/list');
		Menus.addSubMenuItem('topbar','categories','新增类目','categories/create');
	}
]);
