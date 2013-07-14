// The angular module for the page
var fooddish = angular.module('fooddish', []);

// The main angular controller for the page
var fooddishController = function ($scope, $http) {
    // Page related objects
    $scope.error = true;
    $scope.topItemListURL= "http://10.10.1.193:8080/Food/service/topItems";

    // Variables related to the top food item list
    $scope.foodItemList = [];

    $http({ // Read configuration file for images
        url: $scope.topItemListURL,
        method: 'GET',
        dataType: 'jsonp'
    }).success(function (foodItem) {
            console.log(foodItem)
            $scope.foodItemList = foodItem["result"];
        }).
        error(function(data, status) {
            alert(data)
            $scope.data = data || "Request failed";
            $scope.status = status;
        });
};