describe('loginService unit tests', function() {
  var store = {};

  var createService,
      $httpbackend,
      authRequestHandler;

  beforeEach(module('chemGeno'));
  beforeEach(inject(function($injector, _loginService_){

    $httpbackend = $injector.get('$httpBackend');

    /*
      this is a response from actual application
      {
        "auth_token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE0NTgyNTM1ODh9.-TAh1UXhTXmJr8rIN9cmBifQ_JUajenHdRSkNkn6snM",
        "user":{
          "id":1,
          "username":"testUser"
        }
      }
    */
    authRequestHandler = $httpbackend.when('POST', 'http://localhost:3000/authenticate')
                          .respond({
                            auth_token: 'mockToken',
                            user: {
                              id: 1,
                              username: 'mockUser'
                            }
                          });



    //var $service = $injector.get('$service');

    // store mock
    /*
    spyOn(store, 'get').andCallFake(function(key) {
      return store[key];
    });
    spyOn(store, 'set').andCallFake(function(key, value) {
      store[key] = value;
    });
    spyOn(store, 'remove').andCallFake(function(key) {
      delete store[key];
    });
    */

    // perhaps this mocking is easier??
    store.get = function(key) {
      return store[key];
    }

    //not sure if we injected mock store into service
    createService = function() {
      return _loginService_;
    };

  }));

  afterEach(function() {
     $httpbackend.verifyNoOutstandingExpectation();
     $httpbackend.verifyNoOutstandingRequest();
  });

  it('should do something', function() {

  });
});
