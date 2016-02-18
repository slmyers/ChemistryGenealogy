describe('Service: loginService', function() {
  var service,
      httpMock;
  beforeEach(module('chemGeno'));
  beforeEach( function($httpBackend, loginService) {
    httpMock = $httpBackend;
    service = loginService;
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
    $httpBackend.whenPOST('http://localhost:3000/authenticate')
      .respond({
        auth_token: 'mockToken',
        user: {
          id: 1,
          username: 'mockUser'
        }
      });





    // mock a0-angular-store
    var mockStore = {}; mockStore.vals = new Map();

    mockStore.get = function(key) {
      return store.vals.get(key);
    }

    mockStore.set = function(key, value) {
      store.vals.set(key, value);
    };

    mockStore.remove = function(key) {
      store.vals.delete(key);
    }

    module(function ($provide) {
      $provide.value('store', mockStore);
    });

  });

  afterEach(function($httpBackend) {
     $httpBackend.verifyNoOutstandingExpectation();
     $httpBackend.verifyNoOutstandingRequest();
  });

  it('can be instantiated', function() {
    expect(service).not.toBeNull();
  });
});
