describe('PersonalDetailsController', function () {

  beforeEach(module('bioData'));



  it('should check if the "name" property exists', inject(function ($controller) {
    var scope = {},
        biodataController = $controller('PersonalDetailsController', {$scope: scope});
    expect(scope.name).toBeDefined();
  }));

  it('should check if the "name" property is a string', inject(function ($controller) {
    var scope = {},
        biodataController = $controller('PersonalDetailsController', {$scope: scope});
    expect(typeof(scope.name)).toEqual("string");
  }));
 

  it('should check if the "age" property exists', inject(function ($controller) {
    var scope = {},
        biodataController = $controller('PersonalDetailsController', {$scope: scope});
    expect(scope.age).toBeDefined();
  }));

  it('should check if the "name" property is a string', inject(function ($controller) {
    var scope = {},
        biodataController = $controller('PersonalDetailsController', {$scope: scope});
    expect(typeof(scope.age)).toEqual("number");
  }));


  it('should check if the "single" property exists', inject(function ($controller) {
    var scope = {},
        biodataController = $controller('PersonalDetailsController', {$scope: scope});
    expect(scope.single).toBeDefined();
  }));

  it('should check if the "single" property is a array', inject(function ($controller) {
    var scope = {},
        biodataController = $controller('PersonalDetailsController', {$scope: scope});
    expect(typeof (scope.single)).toEqual("boolean");
  }));


  it('should check if the "hobbies" property exists', inject(function ($controller) {
    var scope = {},
        biodataController = $controller('PersonalDetailsController', {$scope: scope});
    expect(scope.hobbies).toBeDefined();
  }));

  it('should check if the "hobbies" property is a string', inject(function ($controller) {
    var scope = {},
        biodataController = $controller('PersonalDetailsController', {$scope: scope});
    expect(typeof(scope.hobbies)).toEqual("object");
    expect(scope.hobbies.length).toEqual(4);
  }));
});