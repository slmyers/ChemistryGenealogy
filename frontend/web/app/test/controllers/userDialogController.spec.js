/**
 *  @author Steven Myers
 */

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
    // should be false at instantiation
    expect(scope.invalidLogin).toBeFalsy();
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
    httpMock.expectGET('/app/views/main.html')
      .respond({});
    httpMock.expectGET('/app/views/search.html')
      .respond({});

    scope.submitLogin({email: 'testEmail@email.ca', password: 'testPassword'});
    httpMock.flush();
    expect(scope.invalidLogin).toBeFalsy();
  });

  it('unsuccessful login should result in invalidLogin === true', function() {
    // should be false at instantiation
    expect(scope.invalidLogin).toBeFalsy();
    httpMock.expectPOST('http://localhost:3000/authenticate',
                        {
                          email: 'testEmail@email.ca',
                          password: 'badPassword'
                        })
      .respond(401, {
        errors: ["invalid email or password"]
      });
    httpMock.expectGET('/app/views/main.html')
      .respond({});
    httpMock.expectGET('/app/views/search.html')
      .respond({});

    scope.submitLogin({email:'testEmail@email.ca', password: 'badPassword'});
    httpMock.flush();
    expect(scope.invalidLogin).toBeTruthy();
  });

  it('sucessful registration should result in invalidRegistration === false', function() {
    expect(scope.invalidRegistration).toBeFalsy();
    expect(scope.invalidLogin).toBeFalsy();
    httpMock.expectPOST('http://localhost:3000/user',
                        {
                          email: 'testEmail@email.ca',
                          password: 'testPassword',
                          first_name: 'firstName',
                          last_name: 'lastName'
                        })
      .respond({
        statusText: "Created",
        data: {
          email: 'testEmail@email.ca',
          password: 'testPassword'
        }
      });
    httpMock.expectGET('/app/views/main.html')
      .respond({});
    httpMock.expectGET('/app/views/search.html')
      .respond({});

    scope.submitRegistration({email:'testEmail@email.ca', password: 'testPassword', firstName: 'firstName', lastName: 'lastName'});
    httpMock.flush();
    expect(scope.invalidLogin).toBeFalsy();
    expect(scope.invalidRegistration).toBeFalsy();
  });

  it('unsuccessful registration should result in invalidRegistration === true', function() {
    expect(scope.invalidRegistration).toBeFalsy();
    expect(scope.invalidLogin).toBeFalsy();
    httpMock.expectPOST('http://localhost:3000/user',
                        {
                          first_name: 'firstName',
                          last_name: 'lastName',
                          email: 'testEmail@email.ca',
                          password: 'testPassword'
                        })
      .respond(400, {
        statusText: "Bad Request",
        data: {
          error: "user exists"
        }
      });
    httpMock.expectGET('/app/views/main.html')
      .respond({});
    httpMock.expectGET('/app/views/search.html')
      .respond({});

    scope.submitRegistration({email:'testEmail@email.ca', password: 'testPassword', firstName: 'firstName', lastName: 'lastName'});
    httpMock.flush();
    expect(scope.invalidLogin).toBeFalsy();
    expect(scope.invalidRegistration).toBeTruthy();
  });


});
