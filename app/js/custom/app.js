(function () {
  var bioData = angular.module('bioData', []); 
  bioData.controller('PersonalDetailsController', function($scope, $http) {
    $scope.person = {
      name: "Bread",
      age: 5,
      single: true,
      hobbies: ["football", "movies", "programming", "acting"]
    };
    $scope.search = function () {
      var url = "https://api.github.com/users/" + $scope.userName;
      $http.get(url).success(function (data) {
        $scope.user = data;
        console.log($scope.user);
      });
    };
  });
})();