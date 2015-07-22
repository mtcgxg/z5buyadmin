'use strict';

angular.module('categories').controller('ListController', ['$scope','Categories',
    function ($scope,Categories) {

        //获取类目列表
        $scope.list = function () {
            Categories.query().$promise
                .then(function (data) {
                    var categoryInfo = $scope.categoryInfo = {};
                    categoryInfo
                }, function (err) {
                    console.log(err);
                });
        };
    }
]);
