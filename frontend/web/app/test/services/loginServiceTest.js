describe('loginService unit tests', function() {
  var service, httpMock, mockStore;
  beforeEach(module('chemGeno'));
  beforeEach(inject(function($injector, _loginService_) {
    httpMock = $injector.get('$httpBackend');
    service = _loginService_;
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
    httpMock.whenPOST('http://localhost:3000/authenticate')
      .respond({
        auth_token: 'mockToken',
        user: {
          id: 1,
          username: 'mockUser'
        }
      });





    // mock a0-angular-store
    mockStore = {}; mockStore.vals = new Map();

    mockStore.get = function(key) {
      return store.vals.get(key);
    }

    mockStore.set = function(key, value) {
      store.vals.set(key, value);
    };

    mockStore.remove = function(key) {
      store.vals.delete(key);
    }

    

    createService = function() {
      return _loginService_;
    };

  }));

  afterEach(function() {
     httpMock.verifyNoOutstandingExpectation();
     httpMock.verifyNoOutstandingRequest();
  });

  it('can be instantiated', function() {
    expect(service).not.toBeNull();
  });
});
