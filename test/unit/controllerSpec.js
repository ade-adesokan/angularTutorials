describe('PersonalDetailsController', function () {
  var scope, 
      biodataController;
  beforeEach( function () {
    module('bioData');
    inject( function ($controller) {
      scope = {};
      biodataController = $controller('PersonalDetailsController', {$scope: scope});
    });
    
  });


  //Test for name property
  it('should check if the "name" property exists', function() {  
    expect(scope.person.name).toBeDefined();
  });

  it('should check if the "name" property is a string', function () { 
    expect(typeof(scope.person.name)).toEqual("string");
  });
 
  //test for age
  it('should check if the "age" property exists', function () { 
    expect(scope.person.age).toBeDefined();
  });

  it('should check if the "name" property is a string', function () {
    expect(typeof(scope.person.age)).toEqual("number");
  });

  //Test for single: (true or False)
  it('should check if the "single" property exists', function () {  
    expect(scope.person.single).toBeDefined();
  });

  it('should check if the "single" property is a array', function () {
    expect(typeof (scope.person.single)).toEqual("boolean");
  });

  //Test for hobbies (array)
  it('should check if the "hobbies" property exists', function () { 
    expect(scope.person.hobbies).toBeDefined();
  });

  it('should check if the "hobbies" property is a array', function () {
    expect(Array.isArray(scope.person.hobbies)).toEqual(true);
  });

  it('should check if the length of hobbies is 4',function () {
    expect(scope.person.hobbies.length).toEqual(4);
  });


});