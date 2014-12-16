(function () {
  var bioData = angular.module('bioData', []); 
  bioData.controller('PersonalDetailsController', function($scope, $http) {
    $scope.person = {
      name: "Bread",
      age: 5,
      single: true,
      hobbies: ["football", "movies", "programming", "acting"]
    };
    $http.get("../../data/cars.json").success(function (data) {
      $scope.cars = data;
    });
 });
})();