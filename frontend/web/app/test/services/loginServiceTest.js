describe('loginService unit tests', function() {
  var store = {};

  var createService,
      $httpbackend,
      authRequestHandler;

  beforeEach(module('chemGeno'));
  beforeEach(inject(function($injector){

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
    authRequestHandler = $httpBackend.when('POST', 'http://localhost:3000/authenticate')
                          .respond({
                            auth_token: 'mockToken',
                            user: {
                              id: 1,
                              username: 'mockUser'
                            }
                          });



    var $service = $injector.get('$service');

    // store mock
    spyOn(store, 'get').andCallFake(function(key) {
      return store[key];
    });
    spyOn(store, 'set').andCallFake(function(key, value) {
      store[key] = value;
    });
    spyOn(store, 'remove').andCallFake(function(key) {
      delete store[key];
    });

    createService = function() {
      return $service('loginService', {'store': store});
    };

  }));

  afterEach(function() {
     $httpBackend.verifyNoOutstandingExpectation();
     $httpBackend.verifyNoOutstandingRequest();
  });

  it('shoud do something', function() {

  });
});
