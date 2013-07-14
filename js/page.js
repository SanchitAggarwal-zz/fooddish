// The angular module for the page
var fooddish = angular.module('fooddish', []);
var topItemListURL= "http://10.10.1.193:8080/Food/service/topItems";
var hotelInfoURL="http://10.10.1.193:8080/Food/service/hotel";
var  hotelList = [{ "_id" : { "$oid" : "51e20b5dc2e69e6e52bddeb0"} , "hotelId" : "729236aa5707c0d03998" , "hotelName" : "Nara Restaurant and Hookah Lounge Store" , "menuItems" : [ { "itemID" : "7d021b0c9f4ec79a3d5c76fae8ba8a91b7457979bc9731b2b4c948c92b292a60" , "rating" : 1.0} , { "itemID" : "8ed6b778545a0f983ca3065f8ff6f08b904cfa0000ca1e9ab44bf0f9801d6b50" , "rating" : 1.0} , { "itemID" : "6396cf2753c9d4c24b95c2b5f49f90b7c2373da8b940ad80fa2c6f24245f46bf" , "rating" : 3.0} , { "itemID" : "ebda44d88987e62fac549f70650d641ccb5c92e780edf70d1f9b52c9b32d5134" , "rating" : 0.0} , { "itemID" : "dd8c0a0a714acd888ff99a064f5edf2f3a524241e87d97ba5dae2f6636f61cd6" , "rating" : 4.0} , { "itemID" : "77b1218b9618a92f98dd0ef33b8785b5ce74084e6d40b51b58bb8b59f8b488f6" , "rating" : 5.0} , { "itemID" : "8ade5f9d21846a1873e2887b26d4d3f9e88dfce3d37e5edac6fd1b15ea0db833" , "rating" : 4.0} , { "itemID" : "4ba130b8086bc661a90260185dc04bb3fa23f49103e055a7db5796598d1ac6a6" , "rating" : 2.0} , { "itemID" : "9cf41c914b9cadf8ee221cd7ee4a51392bd3ae367a8cf8353ca9194e865d6b74" , "rating" : 0.0} , { "itemID" : "e8eb51c757bbd084b4085c43f755e24bf6e41abe0406bfcad28327186bf18ab0" , "rating" : 2.0} , { "itemID" : "10c31ccee0f9d5a14abe870ff37641c99add90b571f81c98e58755ad067ec488" , "rating" : 3.0} , { "itemID" : "ea0ec50d7f34012836bd3afeaf0696a30699141aa3a64888a2efdf538986018e" , "rating" : 3.0} , { "itemID" : "fdbba8081a2e6e55b3df9c1a6c5d02cb99bfafe90d23704c78be870ba9b5af46" , "rating" : 0.0} , { "itemID" : "bc6df62eb4fb483d3f687be9a36400ba40dc4006d3252c1a06008f2113ca825c" , "rating" : 2.0} , { "itemID" : "7d021b0c9f4ec79a3d5c76fae8ba8a91b7457979bc9731b2b4c948c92b292a60" , "rating" : 2.0} , { "itemID" : "8ed6b778545a0f983ca3065f8ff6f08b904cfa0000ca1e9ab44bf0f9801d6b50" , "rating" : 1.0} , { "itemID" : "6396cf2753c9d4c24b95c2b5f49f90b7c2373da8b940ad80fa2c6f24245f46bf" , "rating" : 0.0} , { "itemID" : "ebda44d88987e62fac549f70650d641ccb5c92e780edf70d1f9b52c9b32d5134" , "rating" : 5.0} , { "itemID" : "dd8c0a0a714acd888ff99a064f5edf2f3a524241e87d97ba5dae2f6636f61cd6" , "rating" : 1.0} , { "itemID" : "77b1218b9618a92f98dd0ef33b8785b5ce74084e6d40b51b58bb8b59f8b488f6" , "rating" : 0.0} , { "itemID" : "8ade5f9d21846a1873e2887b26d4d3f9e88dfce3d37e5edac6fd1b15ea0db833" , "rating" : 3.0} , { "itemID" : "4ba130b8086bc661a90260185dc04bb3fa23f49103e055a7db5796598d1ac6a6" , "rating" : 4.0} , { "itemID" : "9cf41c914b9cadf8ee221cd7ee4a51392bd3ae367a8cf8353ca9194e865d6b74" , "rating" : 1.0} , { "itemID" : "e8eb51c757bbd084b4085c43f755e24bf6e41abe0406bfcad28327186bf18ab0" , "rating" : 4.0} , { "itemID" : "10c31ccee0f9d5a14abe870ff37641c99add90b571f81c98e58755ad067ec488" , "rating" : 4.0} , { "itemID" : "ea0ec50d7f34012836bd3afeaf0696a30699141aa3a64888a2efdf538986018e" , "rating" : 0.0} , { "itemID" : "fdbba8081a2e6e55b3df9c1a6c5d02cb99bfafe90d23704c78be870ba9b5af46" , "rating" : 4.0} , { "itemID" : "bc6df62eb4fb483d3f687be9a36400ba40dc4006d3252c1a06008f2113ca825c" , "rating" : 1.0} , { "itemID" : "8ce5dfa1822d339b605af6f783eb449a32cfe0df736010c3b1406c1d24ad5465" , "rating" : 1.0} , { "itemID" : "2ff0f246288a99ede4935a5a8f541a314baba4d97190c81b05b72ba60fe16974" , "rating" : 3.0} , { "itemID" : "a1d40db5b80ad2c1fee42243e54431b254cf6249fcd0062b0f0a140f092eb696" , "rating" : 4.0} , { "itemID" : "4e45343ca71b85118a80b9b556e9af715f389688798d6049591aee48fad86958" , "rating" : 4.0} , { "itemID" : "6b717fd13c4e98004e040a008aa8b486cbaa48aef5899410236771e340117e47" , "rating" : 0.0} , { "itemID" : "9bed4d1e23a2184a81a52c64fc68ee27983b666595a6e296bb50370fb25989e8" , "rating" : 3.0} , { "itemID" : "c7416668f9d51fb887f74e1d9c7bd962083803b6bfa5fa5bf69b951347813517" , "rating" : 2.0} , { "itemID" : "b8d5dc0d88c61567371a9e5002d1a45e3caf2e78bf6ecb655dbd5c075606d1f5" , "rating" : 1.0}] , "userReviews" : [ ] , "location" : { "lat" : 41.8234805 , "lng" : -71.4263081 , "address" : "248 Atwells Ave. USA 2903" , "city" : "Providence" , "state" : "Rhode Island" , "country" : "USA"} , "checkinsCount" : 0 , "usersCount" : 0 , "tipCount" : 0 , "ratings" : 1.0 , "contact" : "9991122121" , "hotelUrl" : "default.jpg"}, { "_id" : { "$oid" : "51e20b73c2e69e6e52bddee0"} , "hotelId" : "53db8c3c47caef66a34a" , "hotelName" : "The Celtic Lounge" , "menuItems" : [ { "itemID" : "37294dc6a699b0eac034c3e3eeef9f31a4c1d09b6dbe0e4725e7c3d94fd6e954" , "rating" : 1.0} , { "itemID" : "8817b01d18202b21646822bff383782f9376a867acdbe4bb46bc743d7d4328ee" , "rating" : 5.0} , { "itemID" : "b690067767df5f235079b0baf9955df19c3264dded9143d2df623cb76c8d02f5" , "rating" : 2.0} , { "itemID" : "a6e57c95a716c2cd429d0d077260861ca6728197dbbcc3233717a8335199c482" , "rating" : 1.0} , { "itemID" : "3329950f5d1df6c89b7abc448370ac32c941692153a27be00f2c368875568519" , "rating" : 0.0} , { "itemID" : "28c2b269da0aff41fb3c804d7ebf16df5af5cb4c88dfffa7244624b3c3134f29" , "rating" : 0.0} , { "itemID" : "a5613df77db71768b501727d81eea6ac9be3757b15d14ae83ba3dd3815b3587f" , "rating" : 5.0} , { "itemID" : "f889f05a9dfe5fa51c7211b9599ae5a5e38f4daa9448f0a0857bd8f7b6a4859e" , "rating" : 1.0} , { "itemID" : "30a3061e0c572ba81a18dbfed45133ad551bc12df54d12016e353146025a657d" , "rating" : 0.0} , { "itemID" : "2718785c10155e7299160348de632f05603d3aeb4a2f00fe0316381c4e26b934" , "rating" : 5.0} , { "itemID" : "835e1e11b03735b13bfb1b311bc220a09e608bf4de479b6288497f85f8e2c631" , "rating" : 5.0} , { "itemID" : "53935185f41f39e8ed274af16e34e255a296ac08c35a1bd8d826bf27f15b2378" , "rating" : 2.0} , { "itemID" : "da8204a453f0369b3fa8634ac3ef928e102c35d15452bce8375f619a1df96185" , "rating" : 2.0} , { "itemID" : "8f4a19756e5236c870690a3d74df4ac0175b46231887cd86337481017cd0d3c3" , "rating" : 1.0} , { "itemID" : "844696e9b1e8c8c5c9dcfc81e69aa0df08ef4d548056ee1a19ca720c77302830" , "rating" : 1.0} , { "itemID" : "b0237238ef856d72ada611b053485759eb6ac8853b89a0560896cab4e03a0ef0" , "rating" : 2.0} , { "itemID" : "f70936a4787bf788ade05931790e098c56179689de2a5ce1073de51a37ada223" , "rating" : 1.0} , { "itemID" : "a18dcc99966f17874bf8c0e12a19d9a6a98a745db6a03661425608833eb05a00" , "rating" : 0.0} , { "itemID" : "a8b8344c05b124266fb025696cfcc78c2f722a1e9adf7c6ce7549dbdca3c4e7b" , "rating" : 2.0} , { "itemID" : "34f91f5743aef31d6a46ab341f729f67423800ff3716a73989fbd0978a99b0c7" , "rating" : 0.0} , { "itemID" : "0b689152a6ff03cccd66fcc2a8db258bfb59bf8d0b31b89bf685c2b4199c222f" , "rating" : 2.0} , { "itemID" : "fc766c73122b00a95b150ada59566268036f9b0d0d13887e517bd775780517c6" , "rating" : 5.0} , { "itemID" : "27d80d96d6836316bc981ade78bb0d7a9929931c97ed2ff57462e1946ac9dfd3" , "rating" : 1.0} , { "itemID" : "07770b0e5b1882b25412e85a361faf86443c0bee157e6b3e7f94437b842ee64e" , "rating" : 3.0}] , "userReviews" : [ ] , "location" : { "lat" : 41.821278 , "lng" : -71.415297 , "address" : "397 Westminster St  usa 2903" , "city" : "Providence" , "state" : "RI" , "country" : "usa"} , "checkinsCount" : 0 , "usersCount" : 0 , "tipCount" : 0 , "ratings" : 5.0 , "contact" : "9991122121" , "hotelUrl" : "default.jpg"}];

// The main angular controller for the page
var fooddishController = function ($scope, $http) {
    // Page related objects
    $scope.error = true;
    //$scope.topItemListURL= "http://10.10.1.193:8080/Food/service/topItems";
   // $scope.hotelInfoURL="http://10.10.1.193:8080/Food/service/hotel";
    $scope.hotelInfoURL=hotelInfoURL;
    $scope.topItemListURL= topItemListURL;
    // Variables related to the top food item list
    $scope.foodItemList = [{ "_id" : { "$oid" : "51e20b31c2e60505e8363e57"} , "itemId" : "10c31ccee0f9d5a14abe870ff37641c99add90b571f81c98e58755ad067ec488" , "itemName" : "Sierra Nevada Pale Ale" , "itemDesc" : "USA" , "itemurl" : "http://farm4.staticflickr.com/3668/9160690355_5dbe50fe37_q.jpg"}, { "_id" : { "$oid" : "51e20b2cc2e60505e8363e4f"} , "itemId" : "8ade5f9d21846a1873e2887b26d4d3f9e88dfce3d37e5edac6fd1b15ea0db833" , "itemName" : "Lagavulin" , "itemDesc" : "16 Yr." , "itemurl" : "http://farm4.staticflickr.com/3785/9276026065_455d7f8f47_q.jpg"}, { "_id" : { "$oid" : "51e20b2dc2e60505e8363e51"} , "itemId" : "4ba130b8086bc661a90260185dc04bb3fa23f49103e055a7db5796598d1ac6a6" , "itemName" : "Balvenie" , "itemDesc" : "12 Yr." , "itemurl" : "http://farm4.staticflickr.com/3710/9275074230_8e90493b75_q.jpg"}, { "_id" : { "$oid" : "51e20b30c2e60505e8363e55"} , "itemId" : "e8eb51c757bbd084b4085c43f755e24bf6e41abe0406bfcad28327186bf18ab0" , "itemName" : "Blue Moon" , "itemDesc" : "USA" , "itemurl" : "http://farm6.staticflickr.com/5488/9280984712_7d7d417e2a_q.jpg"}, { "_id" : { "$oid" : "51e20b60c2e69e6e52bddeb3"} , "itemId" : "8817b01d18202b21646822bff383782f9376a867acdbe4bb46bc743d7d4328ee" , "itemName" : "Mediterranean Platter" , "itemDesc" : "Feta cheese, English cucumbers, kalamata olives, vine ripe tomatoes, pita chips & hummus" , "itemurl" : "http://farm8.staticflickr.com/7416/9234987010_1781105e2f_q.jpg"}, { "_id" : { "$oid" : "51e20b29c2e60505e8363e49"} , "itemId" : "ebda44d88987e62fac549f70650d641ccb5c92e780edf70d1f9b52c9b32d5134" , "itemName" : "Traditional Lebanese Coffee" , "itemDesc" : "" , "itemurl" : "default.jpg"}, { "_id" : { "$oid" : "51e20b65c2e69e6e52bddebd"} , "itemId" : "a5613df77db71768b501727d81eea6ac9be3757b15d14ae83ba3dd3815b3587f" , "itemName" : "Smoked Barbeque Pulled Pork Sandwich" , "itemDesc" : "Slow cooked with house made smoked barbecue sauce" , "itemurl" : "default.jpg"}, { "_id" : { "$oid" : "51e20b2bc2e60505e8363e4d"} , "itemId" : "77b1218b9618a92f98dd0ef33b8785b5ce74084e6d40b51b58bb8b59f8b488f6" , "itemName" : "Johnie Walker Blue" , "itemDesc" : "Blended" , "itemurl" : "http://farm1.staticflickr.com/167/474282013_5eae279494_q.jpg"}, { "_id" : { "$oid" : "51e20b2ac2e60505e8363e4b"} , "itemId" : "dd8c0a0a714acd888ff99a064f5edf2f3a524241e87d97ba5dae2f6636f61cd6" , "itemName" : "Moroccan Mint" , "itemDesc" : "" , "itemurl" : "http://farm8.staticflickr.com/7282/8741047667_39fb5fee35_q.jpg"}, { "_id" : { "$oid" : "51e20b67c2e69e6e52bddec3"} , "itemId" : "2718785c10155e7299160348de632f05603d3aeb4a2f00fe0316381c4e26b934" , "itemName" : "Chicken Caesar Wrap" , "itemDesc" : "Boneless grilled chicken, romaine lettuce, freshly grated parmesan cheese and house made caesar dressing" , "itemurl" : "http://farm4.staticflickr.com/3778/9158475894_014ca47d8d_q.jpg"}];
    /*$http({ // Load the initial data
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
     */
    // Variables related to the top hotel list
    $scope.hotelList = [{ "_id" : { "$oid" : "51e20b5dc2e69e6e52bddeb0"} , "hotelId" : "729236aa5707c0d03998" , "hotelName" : "Nara Restaurant and Hookah Lounge Store" , "menuItems" : [ { "itemID" : "7d021b0c9f4ec79a3d5c76fae8ba8a91b7457979bc9731b2b4c948c92b292a60" , "rating" : 1.0} , { "itemID" : "8ed6b778545a0f983ca3065f8ff6f08b904cfa0000ca1e9ab44bf0f9801d6b50" , "rating" : 1.0} , { "itemID" : "6396cf2753c9d4c24b95c2b5f49f90b7c2373da8b940ad80fa2c6f24245f46bf" , "rating" : 3.0} , { "itemID" : "ebda44d88987e62fac549f70650d641ccb5c92e780edf70d1f9b52c9b32d5134" , "rating" : 0.0} , { "itemID" : "dd8c0a0a714acd888ff99a064f5edf2f3a524241e87d97ba5dae2f6636f61cd6" , "rating" : 4.0} , { "itemID" : "77b1218b9618a92f98dd0ef33b8785b5ce74084e6d40b51b58bb8b59f8b488f6" , "rating" : 5.0} , { "itemID" : "8ade5f9d21846a1873e2887b26d4d3f9e88dfce3d37e5edac6fd1b15ea0db833" , "rating" : 4.0} , { "itemID" : "4ba130b8086bc661a90260185dc04bb3fa23f49103e055a7db5796598d1ac6a6" , "rating" : 2.0} , { "itemID" : "9cf41c914b9cadf8ee221cd7ee4a51392bd3ae367a8cf8353ca9194e865d6b74" , "rating" : 0.0} , { "itemID" : "e8eb51c757bbd084b4085c43f755e24bf6e41abe0406bfcad28327186bf18ab0" , "rating" : 2.0} , { "itemID" : "10c31ccee0f9d5a14abe870ff37641c99add90b571f81c98e58755ad067ec488" , "rating" : 3.0} , { "itemID" : "ea0ec50d7f34012836bd3afeaf0696a30699141aa3a64888a2efdf538986018e" , "rating" : 3.0} , { "itemID" : "fdbba8081a2e6e55b3df9c1a6c5d02cb99bfafe90d23704c78be870ba9b5af46" , "rating" : 0.0} , { "itemID" : "bc6df62eb4fb483d3f687be9a36400ba40dc4006d3252c1a06008f2113ca825c" , "rating" : 2.0} , { "itemID" : "7d021b0c9f4ec79a3d5c76fae8ba8a91b7457979bc9731b2b4c948c92b292a60" , "rating" : 2.0} , { "itemID" : "8ed6b778545a0f983ca3065f8ff6f08b904cfa0000ca1e9ab44bf0f9801d6b50" , "rating" : 1.0} , { "itemID" : "6396cf2753c9d4c24b95c2b5f49f90b7c2373da8b940ad80fa2c6f24245f46bf" , "rating" : 0.0} , { "itemID" : "ebda44d88987e62fac549f70650d641ccb5c92e780edf70d1f9b52c9b32d5134" , "rating" : 5.0} , { "itemID" : "dd8c0a0a714acd888ff99a064f5edf2f3a524241e87d97ba5dae2f6636f61cd6" , "rating" : 1.0} , { "itemID" : "77b1218b9618a92f98dd0ef33b8785b5ce74084e6d40b51b58bb8b59f8b488f6" , "rating" : 0.0} , { "itemID" : "8ade5f9d21846a1873e2887b26d4d3f9e88dfce3d37e5edac6fd1b15ea0db833" , "rating" : 3.0} , { "itemID" : "4ba130b8086bc661a90260185dc04bb3fa23f49103e055a7db5796598d1ac6a6" , "rating" : 4.0} , { "itemID" : "9cf41c914b9cadf8ee221cd7ee4a51392bd3ae367a8cf8353ca9194e865d6b74" , "rating" : 1.0} , { "itemID" : "e8eb51c757bbd084b4085c43f755e24bf6e41abe0406bfcad28327186bf18ab0" , "rating" : 4.0} , { "itemID" : "10c31ccee0f9d5a14abe870ff37641c99add90b571f81c98e58755ad067ec488" , "rating" : 4.0} , { "itemID" : "ea0ec50d7f34012836bd3afeaf0696a30699141aa3a64888a2efdf538986018e" , "rating" : 0.0} , { "itemID" : "fdbba8081a2e6e55b3df9c1a6c5d02cb99bfafe90d23704c78be870ba9b5af46" , "rating" : 4.0} , { "itemID" : "bc6df62eb4fb483d3f687be9a36400ba40dc4006d3252c1a06008f2113ca825c" , "rating" : 1.0} , { "itemID" : "8ce5dfa1822d339b605af6f783eb449a32cfe0df736010c3b1406c1d24ad5465" , "rating" : 1.0} , { "itemID" : "2ff0f246288a99ede4935a5a8f541a314baba4d97190c81b05b72ba60fe16974" , "rating" : 3.0} , { "itemID" : "a1d40db5b80ad2c1fee42243e54431b254cf6249fcd0062b0f0a140f092eb696" , "rating" : 4.0} , { "itemID" : "4e45343ca71b85118a80b9b556e9af715f389688798d6049591aee48fad86958" , "rating" : 4.0} , { "itemID" : "6b717fd13c4e98004e040a008aa8b486cbaa48aef5899410236771e340117e47" , "rating" : 0.0} , { "itemID" : "9bed4d1e23a2184a81a52c64fc68ee27983b666595a6e296bb50370fb25989e8" , "rating" : 3.0} , { "itemID" : "c7416668f9d51fb887f74e1d9c7bd962083803b6bfa5fa5bf69b951347813517" , "rating" : 2.0} , { "itemID" : "b8d5dc0d88c61567371a9e5002d1a45e3caf2e78bf6ecb655dbd5c075606d1f5" , "rating" : 1.0}] , "userReviews" : [ ] , "location" : { "lat" : 41.8234805 , "lng" : -71.4263081 , "address" : "248 Atwells Ave. USA 2903" , "city" : "Providence" , "state" : "Rhode Island" , "country" : "USA"} , "checkinsCount" : 0 , "usersCount" : 0 , "tipCount" : 0 , "ratings" : 1.0 , "contact" : "9991122121" , "hotelUrl" : "default.jpg"}, { "_id" : { "$oid" : "51e20b73c2e69e6e52bddee0"} , "hotelId" : "53db8c3c47caef66a34a" , "hotelName" : "The Celtic Lounge" , "menuItems" : [ { "itemID" : "37294dc6a699b0eac034c3e3eeef9f31a4c1d09b6dbe0e4725e7c3d94fd6e954" , "rating" : 1.0} , { "itemID" : "8817b01d18202b21646822bff383782f9376a867acdbe4bb46bc743d7d4328ee" , "rating" : 5.0} , { "itemID" : "b690067767df5f235079b0baf9955df19c3264dded9143d2df623cb76c8d02f5" , "rating" : 2.0} , { "itemID" : "a6e57c95a716c2cd429d0d077260861ca6728197dbbcc3233717a8335199c482" , "rating" : 1.0} , { "itemID" : "3329950f5d1df6c89b7abc448370ac32c941692153a27be00f2c368875568519" , "rating" : 0.0} , { "itemID" : "28c2b269da0aff41fb3c804d7ebf16df5af5cb4c88dfffa7244624b3c3134f29" , "rating" : 0.0} , { "itemID" : "a5613df77db71768b501727d81eea6ac9be3757b15d14ae83ba3dd3815b3587f" , "rating" : 5.0} , { "itemID" : "f889f05a9dfe5fa51c7211b9599ae5a5e38f4daa9448f0a0857bd8f7b6a4859e" , "rating" : 1.0} , { "itemID" : "30a3061e0c572ba81a18dbfed45133ad551bc12df54d12016e353146025a657d" , "rating" : 0.0} , { "itemID" : "2718785c10155e7299160348de632f05603d3aeb4a2f00fe0316381c4e26b934" , "rating" : 5.0} , { "itemID" : "835e1e11b03735b13bfb1b311bc220a09e608bf4de479b6288497f85f8e2c631" , "rating" : 5.0} , { "itemID" : "53935185f41f39e8ed274af16e34e255a296ac08c35a1bd8d826bf27f15b2378" , "rating" : 2.0} , { "itemID" : "da8204a453f0369b3fa8634ac3ef928e102c35d15452bce8375f619a1df96185" , "rating" : 2.0} , { "itemID" : "8f4a19756e5236c870690a3d74df4ac0175b46231887cd86337481017cd0d3c3" , "rating" : 1.0} , { "itemID" : "844696e9b1e8c8c5c9dcfc81e69aa0df08ef4d548056ee1a19ca720c77302830" , "rating" : 1.0} , { "itemID" : "b0237238ef856d72ada611b053485759eb6ac8853b89a0560896cab4e03a0ef0" , "rating" : 2.0} , { "itemID" : "f70936a4787bf788ade05931790e098c56179689de2a5ce1073de51a37ada223" , "rating" : 1.0} , { "itemID" : "a18dcc99966f17874bf8c0e12a19d9a6a98a745db6a03661425608833eb05a00" , "rating" : 0.0} , { "itemID" : "a8b8344c05b124266fb025696cfcc78c2f722a1e9adf7c6ce7549dbdca3c4e7b" , "rating" : 2.0} , { "itemID" : "34f91f5743aef31d6a46ab341f729f67423800ff3716a73989fbd0978a99b0c7" , "rating" : 0.0} , { "itemID" : "0b689152a6ff03cccd66fcc2a8db258bfb59bf8d0b31b89bf685c2b4199c222f" , "rating" : 2.0} , { "itemID" : "fc766c73122b00a95b150ada59566268036f9b0d0d13887e517bd775780517c6" , "rating" : 5.0} , { "itemID" : "27d80d96d6836316bc981ade78bb0d7a9929931c97ed2ff57462e1946ac9dfd3" , "rating" : 1.0} , { "itemID" : "07770b0e5b1882b25412e85a361faf86443c0bee157e6b3e7f94437b842ee64e" , "rating" : 3.0}] , "userReviews" : [ ] , "location" : { "lat" : 41.821278 , "lng" : -71.415297 , "address" : "397 Westminster St  usa 2903" , "city" : "Providence" , "state" : "RI" , "country" : "usa"} , "checkinsCount" : 0 , "usersCount" : 0 , "tipCount" : 0 , "ratings" : 5.0 , "contact" : "9991122121" , "hotelUrl" : "default.jpg"}];
    $scope.ratingList=[];
    /*$http({ // Load the initial data
        url: $scope.hotelInfoURL,
        method: 'GET'
    }).success(function (hotelData) {
            console.log(hotelData)
            $scope.hotelList = hotelData["result"];
            var range = [];
            var ratings=$scope.hotelList["ratings"]
            for(var i=0;i<ratings;i++) {
                range.push(i);
            }
            $scope.ratingList = range;
        }).
        error(function(data, status) {
            //alert(data)
            $scope.data = data || "Request failed";
            $scope.status = status;
        });*/
};


//Main function on load
$(document).ready(function(){
    try
    {
        //get position from the device
        navigator.geolocation.getCurrentPosition(myPositionSuccess, myPositionError, {frequency:5000, maximumAge: 30000, timeout:10000, enableHighAccuracy: true});

        //watch for change in position
        navigator.geolocation.watchPosition(myWatchSuccess,myPositionError,{frequency:5000})
    }

    catch(error2)
    {
        alert(error2);
    }


    $('#topFoodCarousel').carousel();
    for(hotel in hotelList) {
        var hotelobj=hotelList[hotel];
        var element= "#"+hotelobj["hotelId"]+"_"+hotelobj["ratings"];
        var stars="";
        for(i=0;i<hotelobj["ratings"];i++){
            stars=stars+'<i class="icon-star"></i>';
        }
        $(element).append(stars);
    }
    //    showTopItemList();
    //    showHotelInfo();
});

//To get the hotelList by Item Id
function getHotelByItem(itemId){
    hotelInfoURL=hotelInfoURL+"?"
    fooddishController($scope, $http);

    }



var latitude;
var longitude;
var accuracy;
var latlng;
var speed;
var timestamp;
var loc;
var map;
var mapOptions;
var myLatLng;
var marker;
var eastLat;
var eastLong;
var westLat;
var westLong;

/*function read()
{
    try
    {
        document.addEventListener("deviceready", onDeviceReady, false);
    }

    catch(error1)
    {
        alert(error1);
    }
} */

// Cordova is ready

function onDeviceReady()
{
}


// on getting the geolocation

function myPositionSuccess(position)
{
    try
    {
        //get latitude,longitude,accuracy etc values
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        accuracy = position.coords.accuracy;
        speed = position.coords.speed;
        timestamp = position.timestamp;
        displayMap();
        // displayLocation();

    }

    catch(error3)
    {
        alert(error3);
    }
}

function myPositionError(error)
{
    alert('code: '    + error.code    + '\n' +    'message: ' + error.message + '\n');
}

//each time the position changes
function myWatchSuccess(position)
{
    try
    {
        //get latitude,longitude,accuracy etc values
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        accuracy = position.coords.accuracy;
        speed = position.coords.speed;
        timestamp = position.timestamp;

        displayMap();
        //displayLocation();
        //sendLocation();

    }

    catch(error4)
    {
        alert(error4);
    }

}
function displayMap() {
    mapOptions = {
        center: new google.maps.LatLng(latitude,longitude),
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("map"),
        mapOptions);
    displayMarker();
    getBound();
}

function displayMarker(){
    myLatLng = new google.maps.LatLng(latitude,longitude);
    marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        //title: 'My Position'
    });
    marker.setAnimation(google.maps.Animation.BOUNCE);
    var contentString = 'This is my Position';
    var infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 200
    });
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);
    });
}

function getBound(){
    bounds = map.getBounds();
    eastLat = bounds.getNorthEast().lat();
    eastLong = bounds.getNorthEast().lng();
    westLat = bounds.getSouthWest().lat();
    westLong = bounds.getSouthWest().lng();
}

/*function displayLocation()
 {
 var element = document.getElementById('geolocation');
 element.innerHTML = 'Latitude: '           + latitude              + '<br />' +
 'Longitude: '          + longitude             + '<br />' +
 //'Altitude: '           + altitude              + '<br />' +
 'Accuracy: '           + accuracy              + '<br />' +
 //'Heading: '            + heading               + '<br />' +
 'Speed: '              + speed                 + '<br />' +
 'eLat: '          + eastLat                   + '<br />'+
 'eLong: '          + eastLong                    + '<br />'+
 'wLat: '          + westLat                    + '<br />'+
 'wLong: '          + westLong                    + '<br />'+
 'Timestamp: '          + timestamp                    + '<br />';
 }
 */






