(function () {
  var bioData = angular.module('bioData', []); 
  bioData.controller('PersonalDetailsController', function($scope) {
    $scope.person = {
      name: "Bread",
      age: 5,
      single: true,
      hobbies: ["football", "movies", "programming", "acting"]
    };

  });
})();