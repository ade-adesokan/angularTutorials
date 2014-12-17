describe('PersonalDetailsController', function () {
  var scope, 
      httpBackend,
      biodataController;
  beforeEach( function () {
    module('bioData');
    inject( function ($httpBackend, $rootScope, $controller) {
      httpBackend = $httpBackend;
      httpBackend.expectGET('https://api.github.com/users/andela-aadesokan').
        respond({avatar_url: "https://avatars.githubusercontent.com/u/9656476?v=3", public_repos: 5, followers: 0, following: 0});
      scope = $rootScope.$new();
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

  //Test for HTTP get
  it('should create "user" model with 4 properties fetched from xhr', function () {
    expect(scope.user).toBeUndefined();
    httpBackend.flush();
    expect(scope.user).toEqual({avatar_url: "https://avatars.githubusercontent.com/u/9656476?v=3", public_repos: 5, followers: 0, following: 0});
  });


});