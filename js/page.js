// The angular module for the page
var fooddish = angular.module('fooddish', []);

// The main angular controller for the page
var fooddishController = function ($scope, $http) {
    // Page related objects
    $scope.error = true;
    //$scope.topItemListURL= "http://10.10.1.193:8080/Food/service/topItems";
   // $scope.hotelInfoURL="http://10.10.1.193:8080/Food/service/hotel";
    $scope.hotelInfoURL="resources/context.json";
    $scope.topItemListURL= "resources/randomSchema.json";
    // Variables related to the top food item list
    $scope.foodItemList = [];
    $http({ // Load the initial data
        url: $scope.topItemListURL,
        method: 'GET'
    }).success(function (foodItem) {
            console.log(foodItem)
            $scope.foodItemList = foodItem["result"];
        }).
        error(function(data, status) {
            //alert(data)
            $scope.data = data || "Request failed";
            $scope.status = status;
        });

    // Variables related to the top hotel list
    $scope.hotelList = [];
    $http({ // Load the initial data
        url: $scope.hotelInfoURL,
        method: 'GET'
    }).success(function (hotelData) {
            console.log(hotelData)
            $scope.hotelList = hotelData["result"];
        }).
        error(function(data, status) {
            //alert(data)
            $scope.data = data || "Request failed";
            $scope.status = status;
        });



};