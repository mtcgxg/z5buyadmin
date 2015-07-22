'use strict';

angular.module('stores').controller('StoresController', ['$scope','ngTableParams',
	function ($scope, ngTableParams) {

		//获取商铺列表
		$scope.list = function () {
			Stores.query().$promise
				.then(function (data) {
					$scope.storeInfo = new ngTableParams({
						page: 1,            // show first page
						count: 10           // count per page
					}, {
						total: data.length, // length of data
						getData: function ($defer, params) {
							// use build-in angular filter
							var orderedData = params.sorting() ?
								$filter('orderBy')(data, params.orderBy()) :
								data;
							orderedData = params.filter() ?
								$filter('filter')(orderedData, params.filter()) :
								orderedData;

							params.total(orderedData.length); // set total for recalc pagination
							$defer.resolve($scope.stores = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
						}
					});
				}, function (err) {
					console.log(err);
				});
		};


	}
]);
