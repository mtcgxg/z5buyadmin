'use strict';

angular.module('stores').controller('StoresController', ['$scope', '$location', '$filter', 'Stores', 'ngTableParams','$stateParams', '$state',
	function ($scope, $location, $filter, Stores, ngTableParams,$stateParams, $state) {

		//获取商铺列表
		$scope.list = function () {
			Stores.query().$promise
				.then(function (data) {
					console.log(data);
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

		//修改商铺
		$scope.update = function () {
			var store = $scope.store;

			store.$update(function() {
				$location.path('stores/list');
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};
		//创建新商铺
		$scope.create = function () {
			var store = new Stores({
				name: this.name
			});

			console.log(store);

			store.$save(function (response) {
				if (response.code) {
					$scope.error = errResponse.message;
					return;
				}
				$location.path('stores/list');

				$scope.name = '';
			}, function (errResponse) {
				$scope.error = errResponse.data.message;
			});
		};

		//根据ID获取商铺
		$scope.findOne = function() {
			$scope.store = Stores.get({
				storeId: $stateParams.storeId
			})
		};

		//删除商铺
		$scope.delete = function(storeId) {
			var store = new Stores({
				id: storeId
			});
			store.$remove(function() {
				$state.reload();
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			})
		}
	}
]);
