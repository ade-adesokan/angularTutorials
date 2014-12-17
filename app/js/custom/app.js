(function () {
  var bioData = angular.module('bioData', []); 
  bioData.controller('PersonalDetailsController', function($scope, $http) {
    $scope.person = {
      name: "Bread",
      age: 5,
      single: true,
      hobbies: ["football", "movies", "programming", "acting"]
    };
    $http.get("https://api.github.com/users/andela-aadesokan").success(function (data) {
      $scope.user = data;
      console.log($scope.user);
    });
 });
})();