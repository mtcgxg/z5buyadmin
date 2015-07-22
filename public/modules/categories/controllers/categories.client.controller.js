'use strict';

angular.module('categories').controller('CategoriesController', ['$scope', '$location', '$filter', 'Categories', 'ngTableParams','$stateParams', '$state',
    function ($scope, $location, $filter, Categories, ngTableParams,$stateParams, $state) {

        //获取类目列表
        $scope.list = function () {
            Categories.query().$promise
                .then(function (data) {
                    $scope.categoryInfo = new ngTableParams({
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
                            $defer.resolve($scope.categories = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
                        }
                    });
                }, function (err) {
                    console.log(err);
                });
        };

        //修改类目
        $scope.update = function () {
            var category = $scope.category;

            category.$update(function() {
                $location.path('categories/list');
            }, function(errorResponse) {
                $scope.error = errorResponse.data.message;
            });
        };
        //创建新类目
        $scope.create = function () {
            var category = new Categories({
                name: this.name
            });

            console.log(category);

            category.$save(function (response) {
                if (response.code) {
                    $scope.error = errResponse.message;
                    return;
                }
                $location.path('categories/list');

                $scope.name = '';
            }, function (errResponse) {
                $scope.error = errResponse.data.message;
            });
        };

        //根据ID获取类目
        $scope.findOne = function() {
            $scope.category = Categories.get({
                categoryId: $stateParams.categoryId
            })
        };

        //删除类目
        $scope.delete = function(categoryId) {
            var category = new Categories({
                id: categoryId
            });
            category.$remove(function() {
                $state.reload();
            }, function(errorResponse) {
                $scope.error = errorResponse.data.message;
            })
        }
    }
]);
