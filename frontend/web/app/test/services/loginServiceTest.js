describe('loginService unit tests', function() {
  var service, httpMock, mockStore;
  beforeEach(module('chemGeno'));
  beforeEach(inject(function($injector, _loginService_) {
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
    httpMock = $injector.get('$httpBackend');
    httpMock.expectPOST('http://localhost:3000/authenticate?password=mockPassword&username=mockUser')
      .respond({
        auth_token: 'mockToken',
        user: {
          id: 1,
          username: 'mockUser'
        }
    });



  }));

  afterEach(function() {
     httpMock.verifyNoOutstandingExpectation();
     httpMock.verifyNoOutstandingRequest();
  });

  it('login saves user profile in localstorage', function() {
    service.login({username:'mockUser', password:'mockPassword'})
    .then(function(resp){
      expect(resp).not.toBeNull();
      console.log(resp.data);
      expect(resp.data.auth_token).toBe('mockToken');
      expect(resp.data.user.id).toBe(1);
      expect(resp.data.user.username).toBe('mockUser');
    });
    httpMock.flush();
  });

});
