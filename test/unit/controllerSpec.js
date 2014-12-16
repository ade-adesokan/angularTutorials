describe('PersonalDetailsController', function () {

  beforeEach(module('bioData'));

  //Test for name property
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
 
  //test for age
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

  //Test for single: (true or False)
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

  //Test for hobbies (array)
  it('should check if the "hobbies" property exists', inject(function ($controller) { 
    var scope = {},
        biodataController = $controller('PersonalDetailsController', {$scope: scope});
    expect(scope.hobbies).toBeDefined();
  }));

  it('should check if the "hobbies" property is a array', inject(function ($controller) {
    var scope = {},
        biodataController = $controller('PersonalDetailsController', {$scope: scope});
    expect(Array.isArray(scope.hobbies)).toEqual(true);
  }));

  it('should check if the length of hobbies is 4', inject(function ($controller) {
    var scope = {},
        biodataController = $controller('PersonalDetailsController', {$scope: scope});
    expect(scope.hobbies.length).toEqual(4);
  }));


});