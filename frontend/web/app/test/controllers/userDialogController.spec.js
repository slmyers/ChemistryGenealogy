describe('userDialogController unit tests',  function() {
  var scope, controller, httpMock;
  beforeEach(module('chemGeno'));
  beforeEach(inject(function($injector, $controller, $rootScope) {
    scope = $rootScope.$new();
    httpMock = $injector.get('$httpBackend');
    controller = $controller('userDialogController', {$scope: scope});
    scope.$digest();
  }));

  afterEach(function() {
     httpMock.verifyNoOutstandingExpectation();
     httpMock.verifyNoOutstandingRequest();
  });

  it('successful login should result in invalidLogin === false', function() {
    scope.loginUser = {};
    httpMock.expectPOST('http://localhost:3000/authenticate',
                        {
                          email: 'testEmail@email.ca',
                          password: 'testPassword'
                        })
      .respond({
        auth_token: 'mockToken',
        user: {
          id: 1,
          email: 'testEmail@email.ca'
        }
    });
    scope.submitLogin({email: 'testEmail@email.ca', password: 'testPassword'});
    httpMock.flush();
    expect(scope.invalidLogin).toBeFalsy();
  });

  it('unsuccessful login should result in invalidLogin === true', function() {
    scope.loginUser = {};
    httpMock.expectPOST('http://localhost:3000/authenticate',
                        {
                          email: 'testEmail@email.ca',
                          password: 'badPassword'
                        })
      .respond(401, {
        errors: ["invalid email or password"]
      });
    scope.submitLogin({email:'testEmail@email.ca', password: 'badPassword'});
    httpMock.flush();
    expect(scope.invalidLogin).toBeTruthy();
  });

});
